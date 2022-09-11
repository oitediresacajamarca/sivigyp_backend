import { Test, TestingModule } from '@nestjs/testing';
import { DistribucionGeograficaController } from './distribucion-geografica.controller';

describe('DistribucionGeograficaController', () => {
  let controller: DistribucionGeograficaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DistribucionGeograficaController],
    }).compile();

    controller = module.get<DistribucionGeograficaController>(DistribucionGeograficaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
