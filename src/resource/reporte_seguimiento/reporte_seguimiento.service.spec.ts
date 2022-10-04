import { Test, TestingModule } from '@nestjs/testing';
import { ReporteSeguimientoService } from './reporte_seguimiento.service';

describe('ReporteSeguimientoService', () => {
  let service: ReporteSeguimientoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReporteSeguimientoService],
    }).compile();

    service = module.get<ReporteSeguimientoService>(ReporteSeguimientoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
