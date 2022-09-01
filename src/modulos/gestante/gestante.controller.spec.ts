import { Test, TestingModule } from '@nestjs/testing';
import { GestanteController } from './gestante.controller';

describe('GestanteController', () => {
  let controller: GestanteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GestanteController],
    }).compile();

    controller = module.get<GestanteController>(GestanteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
