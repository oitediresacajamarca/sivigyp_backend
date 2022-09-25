import { Test, TestingModule } from '@nestjs/testing';
import { AtencionPartoService } from './atencion-parto.service';

describe('AtencionPartoService', () => {
  let service: AtencionPartoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AtencionPartoService],
    }).compile();

    service = module.get<AtencionPartoService>(AtencionPartoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
