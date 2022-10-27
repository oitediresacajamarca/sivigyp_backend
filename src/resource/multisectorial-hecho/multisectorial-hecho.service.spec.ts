import { Test, TestingModule } from '@nestjs/testing';
import { MultisectorialHechoService } from './multisectorial-hecho.service';

describe('MultisectorialHechoService', () => {
  let service: MultisectorialHechoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MultisectorialHechoService],
    }).compile();

    service = module.get<MultisectorialHechoService>(MultisectorialHechoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
