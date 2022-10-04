import { Test, TestingModule } from '@nestjs/testing';
import { AtencionPuerperioService } from './atencion-puerperio.service';

describe('AtencionPuerperioService', () => {
  let service: AtencionPuerperioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AtencionPuerperioService],
    }).compile();

    service = module.get<AtencionPuerperioService>(AtencionPuerperioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
