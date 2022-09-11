import { Test, TestingModule } from '@nestjs/testing';
import { PersonaRiscController } from './persona_risc.controller';

describe('PersonaRiscController', () => {
  let controller: PersonaRiscController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonaRiscController],
    }).compile();

    controller = module.get<PersonaRiscController>(PersonaRiscController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
