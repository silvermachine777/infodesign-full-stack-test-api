import { Test, TestingModule } from '@nestjs/testing';
import { HistoricalConsumptionController } from './historicaConsumption.controller';

describe('HistoricalConsumptionController', () => {
  let controller: HistoricalConsumptionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HistoricalConsumptionController],
    }).compile();

    controller = module.get<HistoricalConsumptionController>(HistoricalConsumptionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
