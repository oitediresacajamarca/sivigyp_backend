import { Test, TestingModule } from '@nestjs/testing';
import { PadronGestanteService } from './padron-gestante.service';

describe('PadronGestanteService', () => {
  let service: PadronGestanteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PadronGestanteService],
    }).compile();

    service = module.get<PadronGestanteService>(PadronGestanteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
