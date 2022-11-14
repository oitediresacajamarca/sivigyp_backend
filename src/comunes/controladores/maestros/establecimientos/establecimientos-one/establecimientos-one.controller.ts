import { Controller, Get, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Establecimientos } from 'src/comunes/entidades/establecimientos';
import { In, Repository } from 'typeorm';

@Controller('establecimientos-one')
export class EstablecimientosOneController {
  constructor(
    @InjectRepository(Establecimientos, 'ONE_VISION')
    private es_rep: Repository<Establecimientos>,
  ) {}
  @Get('UNIDAD_EJECUTORA')
  devolver_unidad_ejecutora(@Param('origen') origen: string) {
    this.es_rep.find({ where: { IdNivelesEstablecimientos: 1 } });
  }

  @Get('RED/:origen')
  async devolver_red(@Param('origen') origen: string) {
    const resp = await this.es_rep.find({
      where: { IdNivelesEstablecimientos: 4 },
    });
    return resp;
  }
  @Get('MICRORED/:origen/:filtro_red')
  async devolver_micorred(
    @Param('origen') origen: string,
    @Param('filtro_red') filtro_red: number,
  ) {
    const RESP = await this.es_rep.find({
      where: { IdNivelesEstablecimientos: 5, idRed: filtro_red },
    });
    return RESP;
  }
  @Get('ESTABLECIMIENTO/:origen/:filtro_microred')
  async devolver_establecimiento(
    @Param('origen') origen: string,
    @Param('filtro_microred') filtro_microred: number,
  ) {
   const resp=await this.es_rep.find({
      where: { IdNivelesEstablecimientos:In([6,5]) , idMicrored: filtro_microred },
    });
    return resp
  }

  @Get('ESTABLECIMIENTO_ONE/:id')
  async devolver_establecimiento_one(@Param('id') id: number) {
    const res = await this.es_rep.findOne({
      where: { Id: id },
    });
    return res;
  }
  @Get('ESTABLECIMIENTO_ONE_SUP/:id')
  async devolver_establecimiento_one_sup(@Param('id') id: number) {
    const res = await this.es_rep.findOne({
      where: { IdSuperior: id },
    });
    return res;
  }
}
