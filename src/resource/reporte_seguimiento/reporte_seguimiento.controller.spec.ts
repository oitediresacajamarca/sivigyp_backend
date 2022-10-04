import { Test, TestingModule } from '@nestjs/testing';
import { ReporteSeguimientoController } from './reporte_seguimiento.controller';
import { ReporteSeguimientoService } from './reporte_seguimiento.service';

describe('ReporteSeguimientoController', () => {
  let controller: ReporteSeguimientoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReporteSeguimientoController],
      providers: [ReporteSeguimientoService],
    }).compile();

    controller = module.get<ReporteSeguimientoController>(ReporteSeguimientoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
