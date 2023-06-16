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
    const historiType = data.historyType;

    if (historiType === 'historyByTranches') {
      try {
        const request = new sql.Request(this.sqlServerConnection);

        const res = await request.query(`
          SELECT 
            l.nombre Linea,
            hc.fecha Fecha,
            hc.Consumo,
            hc.Perdida,
            hc.Costo [Costo x Consumo]	
          FROM 
            HistoricoConsumos hc
            INNER JOIN Tipo_clientes tc ON tc.id = hc.idTipCliente
            INNER JOIN Lineas l ON l.id = hc.idLinea
          WHERE hc.fecha >= '${initialDate}' AND hc.fecha <= '${finalDate}';
        `);

        return res.recordset.length > 0 ? res.recordset : [];
      } catch (err) {
        throw new Error(err);
      }
    }
  }

  async byClient(data: HistorialConsumptionDto) {
    const initialDate = data.initialDate;
    const finalDate = data.finalDate;
    const historiType = data.historyType;

    if (historiType === 'historyByClient') {
      try {
        const request = new sql.Request(this.sqlServerConnection);

        const res = await request.query(`
          SELECT 
              tc.nombre Cliente,
              l.nombre Linea,
              hc.Consumo,
              hc.Perdida,
              hc.Costo [Costo x Consumo]	
          FROM 
            HistoricoConsumos hc
            INNER JOIN Tipo_clientes tc ON tc.id = hc.idTipCliente
            INNER JOIN Lineas l ON l.id = hc.idLinea
          WHERE hc.fecha >= '${initialDate}' AND hc.fecha <= '${finalDate}'
        `);

        return res.recordset.length > 0 ? res.recordset : [];
      } catch (err) {
        throw new Error(err);
      }
    }
  }
}
