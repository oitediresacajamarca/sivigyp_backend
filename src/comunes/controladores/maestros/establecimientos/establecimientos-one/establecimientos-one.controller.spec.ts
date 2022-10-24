import { Test, TestingModule } from '@nestjs/testing';
import { EstablecimientosOneController } from './establecimientos-one.controller';

describe('EstablecimientosOneController', () => {
  let controller: EstablecimientosOneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstablecimientosOneController],
    }).compile();

    controller = module.get<EstablecimientosOneController>(EstablecimientosOneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
