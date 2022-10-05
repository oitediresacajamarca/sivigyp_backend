import { Test, TestingModule } from '@nestjs/testing';
import { NacimientoService } from './nacimiento.service';

describe('NacimientoService', () => {
  let service: NacimientoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NacimientoService],
    }).compile();

    service = module.get<NacimientoService>(NacimientoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
