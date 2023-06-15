import { Test, TestingModule } from '@nestjs/testing';
import { HistoricalConsumptionService } from './historicalConsumption.service';

describe('HistoricalConsumptionService', () => {
  let service: HistoricalConsumptionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HistoricalConsumptionService],
    }).compile();

    service = module.get<HistoricalConsumptionService>(
      HistoricalConsumptionService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
