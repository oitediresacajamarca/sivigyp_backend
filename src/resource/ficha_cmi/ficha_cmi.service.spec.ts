import { Test, TestingModule } from '@nestjs/testing';
import { FichaCmiService } from './ficha_cmi.service';

describe('FichaCmiService', () => {
  let service: FichaCmiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FichaCmiService],
    }).compile();

    service = module.get<FichaCmiService>(FichaCmiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
