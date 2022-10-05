import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NacimientoService } from './nacimiento.service';
import { CreateNacimientoDto } from './dto/create-nacimiento.dto';
import { UpdateNacimientoDto } from './dto/update-nacimiento.dto';

@Controller('nacimiento')
export class NacimientoController {
  constructor(private readonly nacimientoService: NacimientoService) {}

  @Post()
  create(@Body() createNacimientoDto: CreateNacimientoDto) {
    return this.nacimientoService.create(createNacimientoDto);
  }

  @Get()
  findAll() {
    return this.nacimientoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nacimientoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateNacimientoDto: UpdateNacimientoDto,
  ) {
    return this.nacimientoService.update(+id, updateNacimientoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nacimientoService.remove(+id);
  }
}
