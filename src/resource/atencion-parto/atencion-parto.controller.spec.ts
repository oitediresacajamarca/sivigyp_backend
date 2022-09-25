import { Test, TestingModule } from '@nestjs/testing';
import { AtencionPartoController } from './atencion-parto.controller';
import { AtencionPartoService } from './atencion-parto.service';

describe('AtencionPartoController', () => {
  let controller: AtencionPartoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AtencionPartoController],
      providers: [AtencionPartoService],
    }).compile();

    controller = module.get<AtencionPartoController>(AtencionPartoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
