import { Test, TestingModule } from '@nestjs/testing';
import { IpressController } from './ipress.controller';

describe('IpressController', () => {
  let controller: IpressController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IpressController],
    }).compile();

    controller = module.get<IpressController>(IpressController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
