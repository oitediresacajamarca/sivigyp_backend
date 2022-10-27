import { Test, TestingModule } from '@nestjs/testing';
import { MultisectorialHechoController } from './multisectorial-hecho.controller';
import { MultisectorialHechoService } from './multisectorial-hecho.service';

describe('MultisectorialHechoController', () => {
  let controller: MultisectorialHechoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MultisectorialHechoController],
      providers: [MultisectorialHechoService],
    }).compile();

    controller = module.get<MultisectorialHechoController>(MultisectorialHechoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
