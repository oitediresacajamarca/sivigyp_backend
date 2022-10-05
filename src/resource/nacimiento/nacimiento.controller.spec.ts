import { Test, TestingModule } from '@nestjs/testing';
import { NacimientoController } from './nacimiento.controller';
import { NacimientoService } from './nacimiento.service';

describe('NacimientoController', () => {
  let controller: NacimientoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NacimientoController],
      providers: [NacimientoService],
    }).compile();

    controller = module.get<NacimientoController>(NacimientoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
