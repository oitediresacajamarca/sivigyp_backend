import { Test, TestingModule } from '@nestjs/testing';
import { PadronGestanteController } from './padron-gestante.controller';
import { PadronGestanteService } from './padron-gestante.service';

describe('PadronGestanteController', () => {
  let controller: PadronGestanteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PadronGestanteController],
      providers: [PadronGestanteService],
    }).compile();

    controller = module.get<PadronGestanteController>(PadronGestanteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
