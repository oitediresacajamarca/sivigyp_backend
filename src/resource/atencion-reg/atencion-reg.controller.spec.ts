import { Test, TestingModule } from '@nestjs/testing';
import { AtencionRegController } from './atencion-reg.controller';
import { AtencionRegService } from './atencion-reg.service';

describe('AtencionRegController', () => {
  let controller: AtencionRegController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AtencionRegController],
      providers: [AtencionRegService],
    }).compile();

    controller = module.get<AtencionRegController>(AtencionRegController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
