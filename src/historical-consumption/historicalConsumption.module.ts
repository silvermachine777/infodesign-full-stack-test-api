import { Module } from '@nestjs/common';
import { HistoricalConsumptionController } from './controllers/historicalConsumption.controller';
import { HistoricalConsumptionService } from './services/historicalConsumption.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [HistoricalConsumptionController],
  providers: [HistoricalConsumptionService],
  exports: [HistoricalConsumptionService],
})
export class HistoricalConsumptionModule {}
