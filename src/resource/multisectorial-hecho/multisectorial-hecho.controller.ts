import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MultisectorialHechoService } from './multisectorial-hecho.service';
import { CreateMultisectorialHechoDto } from './dto/create-multisectorial-hecho.dto';
import { UpdateMultisectorialHechoDto } from './dto/update-multisectorial-hecho.dto';

@Controller('multisectorial-hecho')
export class MultisectorialHechoController {
  constructor(
    private readonly multisectorialHechoService: MultisectorialHechoService,
  ) {}

  @Post()
  create(@Body() createMultisectorialHechoDto: CreateMultisectorialHechoDto) {
    return this.multisectorialHechoService.create(createMultisectorialHechoDto);
  }

  @Get('detalle/:NRO_DOCUMENTO')
  findDetalle(@Param('NRO_DOCUMENTO') NRO_DOCUMENTO: string) {
    return this.multisectorialHechoService.find_numero_documento(NRO_DOCUMENTO);
  }

  @Post('detalle')
  findDetalleFiltro(@Body() filtro: any) {
    return this.multisectorialHechoService.detalle(filtro);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.multisectorialHechoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMultisectorialHechoDto: UpdateMultisectorialHechoDto,
  ) {
    return this.multisectorialHechoService.update(
      +id,
      updateMultisectorialHechoDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.multisectorialHechoService.remove(+id);
  }
}
