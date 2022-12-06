import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AtencionPuerperioService } from './atencion-puerperio.service';
import { CreateAtencionPuerperioDto } from './dto/create-atencion-puerperio.dto';
import { GenerarCitasPuerperioDto } from './dto/generar_citas_puerperio.dto';
import { UpdateAtencionPuerperioDto } from './dto/update-atencion-puerperio.dto';

@Controller('atencion-puerperio')
export class AtencionPuerperioController {
  constructor(
    private readonly atencionPuerperioService: AtencionPuerperioService,
  ) {}

  @Post('crear_citas')
  create_citas(@Body() createAtencionPuerperioDto: GenerarCitasPuerperioDto) {
    return this.atencionPuerperioService.crear_citas(
      createAtencionPuerperioDto,
    );
  }

  @Get('atender/:id_atencion_puerperio')
  async atender_cita(
    @Param('id_atencion_puerperio') id_atencion_puerperio: number,
  ) {
    return await this.atencionPuerperioService.atender_cita(
      id_atencion_puerperio,
    );
  }

  @Post('reprogramar/:id_atencion_puerperio')
  async reprogramar_cita(
    @Param('id_atencion_puerperio') id_atencion_puerperio: number,@Body() body:any
  ) {
    return await this.atencionPuerperioService.reprogramar(
      id_atencion_puerperio,
      body.fecha
    );
  }

  @Post('no_atender/:id_atencion_puerperio')
  async no_atender_cita(
    @Param('id_atencion_puerperio') id_atencion_puerperio: number,@Body() body:any
  ) {
    return await this.atencionPuerperioService.no_atender(
      id_atencion_puerperio,
      body
    );
  }
  @Post()
  create(@Body() createAtencionPuerperioDto: any) {
    return this.atencionPuerperioService.create(createAtencionPuerperioDto);
  }

  @Get()
  findAll() {
    return this.atencionPuerperioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.atencionPuerperioService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAtencionPuerperioDto: UpdateAtencionPuerperioDto,
  ) {
    return this.atencionPuerperioService.update(
      +id,
      updateAtencionPuerperioDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.atencionPuerperioService.remove(+id);
  }
}
