import { Test, TestingModule } from '@nestjs/testing';
import { RiesgosController } from './riesgos.controller';

describe('RiesgosController', () => {
  let controller: RiesgosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RiesgosController],
    }).compile();

    controller = module.get<RiesgosController>(RiesgosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
