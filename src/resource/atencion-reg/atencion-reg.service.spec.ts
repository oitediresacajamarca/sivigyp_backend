import { Test, TestingModule } from '@nestjs/testing';
import { AtencionRegService } from './atencion-reg.service';

describe('AtencionRegService', () => {
  let service: AtencionRegService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AtencionRegService],
    }).compile();

    service = module.get<AtencionRegService>(AtencionRegService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
