import { Test, TestingModule } from '@nestjs/testing';
import { MicroredController } from './microred.controller';

describe('MicroredController', () => {
  let controller: MicroredController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MicroredController],
    }).compile();

    controller = module.get<MicroredController>(MicroredController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
