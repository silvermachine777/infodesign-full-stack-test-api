import { Inject, Injectable } from '@nestjs/common';
import { HistorialConsumptionDto } from '../dtos/historicalConsumption.dtos';
import * as sql from 'mssql';

@Injectable()
export class HistoricalConsumptionService {
  constructor(
    @Inject('SQL_SERVER_CONNECTION') private sqlServerConnection: any,
  ) {}

  async byTranches(data: HistorialConsumptionDto) {
    const initialDate = data.initialDate;
    const finalDate = data.finalDate;

    try {
      const request = new sql.Request(this.sqlServerConnection);

      const res = await request.query(`
        SELECT DISTINCT hc.idTipCliente, hc.idlinea tramo, hc.Consumo, hc.Costo, hc.Perdida
        FROM HistoricoConsumos hc
        INNER JOIN consumo_por_tramo c ON hc.fecha = c.fecha
        INNER JOIN costo_por_tramo cp ON hc.fecha = cp.fecha
        INNER JOIN perdida_por_tramo p ON hc.fecha = p.fecha
        WHERE hc.fecha >= '${initialDate}' AND hc.fecha <= '${finalDate}';
      `);

      return res.recordset.length > 0 ? res.recordset : [];
    } catch (err) {
      throw new Error(err);
    }
  }
}
