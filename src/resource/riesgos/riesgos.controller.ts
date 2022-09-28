import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RiesgosService } from './riesgos.service';
import { CreateRiesgoDto } from './dto/create-riesgo.dto';
import { UpdateRiesgoDto } from './dto/update-riesgo.dto';
import { AsignarRiesgoDto } from './dto/asignar_riesgo.dto';

@Controller('riesgos')
export class RiesgosController {
  constructor(private readonly riesgosService: RiesgosService) {}

  @Post('asignar/:ID_ATENCION')
  async asignar(
    @Param('ID_ATENCION') ID_ATENCION: string,
    @Body() body: AsignarRiesgoDto,
  ) {
    const rest = await this.riesgosService.asignar(ID_ATENCION, body);
    return rest;
  }
  @Post('asignar/atencion/:ID_ATENCION')
  async cargar_riesgos(@Param('ID_ATENCION') ID_ATENCION: string) {
    const rest = await this.riesgosService.cargar_riesgos(ID_ATENCION);
    return rest;
  }

  @Post()
  create(@Body() createRiesgoDto: CreateRiesgoDto) {
    return this.riesgosService.create(createRiesgoDto);
  }

  @Get()
  findAll() {
    return this.riesgosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.riesgosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRiesgoDto: UpdateRiesgoDto) {
    return this.riesgosService.update(+id, updateRiesgoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.riesgosService.remove(+id);
  }
}
