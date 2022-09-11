import { Test, TestingModule } from '@nestjs/testing';
import { GradoInstruccionController } from './grado-instruccion.controller';

describe('GradoInstruccionController', () => {
  let controller: GradoInstruccionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GradoInstruccionController],
    }).compile();

    controller = module.get<GradoInstruccionController>(GradoInstruccionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
