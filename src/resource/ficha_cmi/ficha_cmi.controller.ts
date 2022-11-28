import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FichaCmiService } from './ficha_cmi.service';
import { CreateFichaCmiDto } from './dto/create-ficha_cmi.dto';
import { UpdateFichaCmiDto } from './dto/update-ficha_cmi.dto';

@Controller('ficha-cmi')
export class FichaCmiController {
  constructor(private readonly fichaCmiService: FichaCmiService) {}

  @Post()
  create(@Body() createFichaCmiDto: any) {
    console.log(createFichaCmiDto)
    return this.fichaCmiService.create(createFichaCmiDto);
  }

  @Get()
  findAll() {
    return this.fichaCmiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fichaCmiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFichaCmiDto: UpdateFichaCmiDto) {
    return this.fichaCmiService.update(+id, updateFichaCmiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fichaCmiService.remove(+id);
  }
}
