import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { HistoricalConsumptionService } from '../services/historicalConsumption.service';
import { HistorialConsumptionDto } from '../dtos/historicalConsumption.dtos';

@Controller('historicalConsumptions')
export class HistoricalConsumptionController {
  constructor(
    private readonly historicalConsumptionService: HistoricalConsumptionService,
  ) {}

  @Post('byTranches')
  @HttpCode(200)
  async getHistoricalConsumptionByTranches(
    @Body() payload: HistorialConsumptionDto,
  ) {
    try {
      const result = await this.historicalConsumptionService.byTranches(
        payload,
      );
      return { success: true, data: result, status: 200 };
    } catch (error) {
      throw new Error(error);
    }
  }
  @Post('byClient')
  @HttpCode(200)
  async getHistoricalConsumptionByClient(
    @Body() payload: HistorialConsumptionDto,
  ) {
    try {
      const result = await this.historicalConsumptionService.byClient(payload);
      return { success: true, data: result, status: 200 };
    } catch (error) {
      throw new Error(error);
    }
  }
  @Post('top20WorstSegmentsByClient')
  @HttpCode(200)
  async top20WorstSegmentsByClient(@Body() payload: HistorialConsumptionDto) {
    try {
      const result =
        await this.historicalConsumptionService.top20WorstSegmentsByClient(
          payload,
        );
      return { success: true, data: result, status: 200 };
    } catch (error) {
      throw new Error(error);
    }
  }
}
