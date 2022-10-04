import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ReporteSeguimientoService } from './reporte_seguimiento.service';
import { CreateReporteSeguimientoDto } from './dto/create-reporte_seguimiento.dto';
import { UpdateReporteSeguimientoDto } from './dto/update-reporte_seguimiento.dto';

@Controller('reporte-seguimiento')
export class ReporteSeguimientoController {
  constructor(
    private readonly reporteSeguimientoService: ReporteSeguimientoService,
  ) {}

  @Post()
  create(@Body() createReporteSeguimientoDto: CreateReporteSeguimientoDto) {
    return this.reporteSeguimientoService.create(createReporteSeguimientoDto);
  }

  @Get('generar')
  devolver_seguimiento() {
    return this.reporteSeguimientoService.generar_reporte_seguimientO();
  }

  @Get()
  findAll() {
    return this.reporteSeguimientoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reporteSeguimientoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateReporteSeguimientoDto: UpdateReporteSeguimientoDto,
  ) {
    return this.reporteSeguimientoService.update(
      +id,
      updateReporteSeguimientoDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reporteSeguimientoService.remove(+id);
  }
}
