import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AtencionPartoService } from './atencion-parto.service';
import { CreateAtencionPartoDto } from './dto/create-atencion-parto.dto';
import { UpdateAtencionPartoDto } from './dto/update-atencion-parto.dto';

@Controller('atencion-parto')
export class AtencionPartoController {
  constructor(private readonly atencionPartoService: AtencionPartoService) {}

  @Post()
  create(@Body() createAtencionPartoDto: CreateAtencionPartoDto) {
    return this.atencionPartoService.create(createAtencionPartoDto);
  }

  @Get()
  findAll() {
    return this.atencionPartoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.atencionPartoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAtencionPartoDto: UpdateAtencionPartoDto,
  ) {
    return this.atencionPartoService.update(+id, updateAtencionPartoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.atencionPartoService.remove(+id);
  }
}
