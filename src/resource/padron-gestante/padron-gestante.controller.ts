import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PadronGestanteService } from './padron-gestante.service';
import { CreatePadronGestanteDto } from './dto/create-padron-gestante.dto';
import { UpdatePadronGestanteDto } from './dto/update-padron-gestante.dto';

@Controller('padron-gestante')
export class PadronGestanteController {
  constructor(private readonly padronGestanteService: PadronGestanteService) {}

  @Post()
  create(@Body() createPadronGestanteDto: CreatePadronGestanteDto) {
    return this.padronGestanteService.create(createPadronGestanteDto);
  }

  @Get(':ipress')
  get_padron_ipress(@Param('ipress') ipress: string) {
    return this.padronGestanteService.get_padron(ipress);
  }

  @Get('SIV/:ipress')
  get_padron_ipress_SIV(@Param('ipress') ipress: string) {
    return this.padronGestanteService.get_padron_ipress_SIV(ipress);
  }

  @Get()
  findAll() {
    return this.padronGestanteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.padronGestanteService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePadronGestanteDto: UpdatePadronGestanteDto,
  ) {
    return this.padronGestanteService.update(+id, updatePadronGestanteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.padronGestanteService.remove(+id);
  }
}
