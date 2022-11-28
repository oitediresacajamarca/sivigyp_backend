import { Test, TestingModule } from '@nestjs/testing';
import { FichaCmiController } from './ficha_cmi.controller';
import { FichaCmiService } from './ficha_cmi.service';

describe('FichaCmiController', () => {
  let controller: FichaCmiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FichaCmiController],
      providers: [FichaCmiService],
    }).compile();

    controller = module.get<FichaCmiController>(FichaCmiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
