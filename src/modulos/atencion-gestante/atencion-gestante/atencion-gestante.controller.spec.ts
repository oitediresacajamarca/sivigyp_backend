import { Test, TestingModule } from '@nestjs/testing';
import { AtencionGestanteController } from './atencion-gestante.controller';

describe('AtencionGestanteController', () => {
  let controller: AtencionGestanteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AtencionGestanteController],
    }).compile();

    controller = module.get<AtencionGestanteController>(AtencionGestanteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
