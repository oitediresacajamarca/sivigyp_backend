import { Test, TestingModule } from '@nestjs/testing';
import { AtencionPuerperioController } from './atencion-puerperio.controller';
import { AtencionPuerperioService } from './atencion-puerperio.service';

describe('AtencionPuerperioController', () => {
  let controller: AtencionPuerperioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AtencionPuerperioController],
      providers: [AtencionPuerperioService],
    }).compile();

    controller = module.get<AtencionPuerperioController>(AtencionPuerperioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
