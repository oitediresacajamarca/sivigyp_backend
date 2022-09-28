import { Test, TestingModule } from '@nestjs/testing';
import { AtencionHisController } from './atencion-his.controller';

describe('AtencionHisController', () => {
  let controller: AtencionHisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AtencionHisController],
    }).compile();

    controller = module.get<AtencionHisController>(AtencionHisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
