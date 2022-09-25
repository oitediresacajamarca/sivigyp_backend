import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AtencionRegService } from './atencion-reg.service';
import { CreateAtencionRegDto } from './dto/create-atencion-reg.dto';
import { UpdateAtencionRegDto } from './dto/update-atencion-reg.dto';

@Controller('atencion-reg')
export class AtencionRegController {
  constructor(private readonly atencionRegService: AtencionRegService) {}

  @Post()
  create(@Body() createAtencionRegDto: CreateAtencionRegDto) {
    return this.atencionRegService.create(createAtencionRegDto);
  }

  @Get()
  findAll() {
    return this.atencionRegService.findAll();
  }

  @Post('atencion/generar_atencion_reg/:id_atencion')
  generar_atencion_reg(@Param('id_atencion') id_atencion: number) {
    return this.atencionRegService.generar_atencion_reg(
      id_atencion,
      new Date(),
    );
  }
  @Post('atender/:id_atencion')
  atender(@Param('id_atencion') id_atencion: number, @Body() payload: any) {
    return this.atencionRegService.atender(id_atencion, payload);
  }
  @Post('noatender/:id_atencion')
  noatender(@Param('id_atencion') id_atencion: number, @Body() payload: any) {
    console.log(id_atencion);
    return this.atencionRegService.noatender(id_atencion, payload);
  }
  @Get('atencion/:id_atencion')
  findByhc(@Param('id_atencion') id_atencion: number) {
    return this.atencionRegService.findOneID_ATENCION(id_atencion);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.atencionRegService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAtencionRegDto: UpdateAtencionRegDto,
  ) {
    return this.atencionRegService.update(+id, updateAtencionRegDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.atencionRegService.eliminar(id);
  }
  @Post('reporte/gestante/:ipress')
  async reporte(@Param('ipress') ipress: string, @Body() body: any) {
    const resp = await this.atencionRegService.reporte_gestantes(ipress, body);
    return resp;
  }
}
