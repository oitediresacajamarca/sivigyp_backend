import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { AtencionEntity } from 'src/comunes/entidades/atencion.entity';
import { HistoriaClinicaEntity } from 'src/comunes/entidades/historia-clinica.entity';
import { Repository } from 'typeorm';

import { DatosParaGestacionDto } from '../dto/datos-para-gestacion.dto';
import { InformacionGestanteDto } from '../dto/informacion-gestante.dto';

@Controller('atencion-gestante')
export class AtencionGestanteController {
  constructor(
    @InjectRepository(AtencionEntity, 'db_svgyp')
    private Atencion_Rep: Repository<AtencionEntity>,
    @InjectRepository(HistoriaClinicaEntity, 'db_svgyp')
    private Historia_Clinica_rep: Repository<HistoriaClinicaEntity>,
  ) {}
  @Post(':nro_historia_clinica')
  async Crear_Atencion(
    @Param('nro_historia_clinica') nro_historia_clinica: string,
    @Body('informacion_gestante_form')
    informacion_gestante_form: InformacionGestanteDto,
    @Body('informacion_para_gestacion_form')
    informacion_para_gestacion_form: DatosParaGestacionDto,
  ) {
    const hc = await this.Historia_Clinica_rep.findOne({
      where: { NRO_HCL: nro_historia_clinica },
    });

    if (hc == null) {
      throw new NotFoundException('NO EXISTE HISTORIA CLINICA');
    }

    let atencion = await this.Atencion_Rep.findOne({
      where: { ID_HC: hc.ID_HC, ESTADO_ATENCION: 0 },
    });

    if (atencion == null) {
      atencion = this.Atencion_Rep.create({
        FEC_REGISTRO: informacion_gestante_form.fecha_registro,
        FECHA: informacion_gestante_form.fecha_registro,
        FUR_ATENCION: informacion_gestante_form.fecha_ultima_regla,
        FECHA_ATENCION_PRENATAL:
          informacion_gestante_form.fecha_atencion_prenatal,
        ID_HC: hc.ID_HC,
        ESTADO_ATENCION: 0,
        FECHA_CONFIRMO_GESTACION: null,
        FECHA_POSIBLE_PARTO:
          informacion_para_gestacion_form.fecha_probable_parto,
        HIJOS_VIVOS: informacion_gestante_form.numero_hijos_vivos,
        NRO_GESTACIONES: informacion_gestante_form.numero_gestaciones,
        NUMERO_ABORTOS: informacion_gestante_form.numero_abortos,
        OBSERVACIONES: informacion_gestante_form.observaciones,
        FEC_ACTUALIZACION: new Date(),

        RECIEN_NACIDOS_PREMATUROS:
          informacion_gestante_form.recien_nacidos_prematuros,
        RECIEN_NACIDOS_TERMINO:
          informacion_gestante_form.recien_nacidos_termino,
        ESTADO_ACTUAL_GESTANTE: 'GESTANDO',
      });
    }
    let resp;
    try {
      resp = await this.Atencion_Rep.save(atencion);
    } catch (e) {
      console.log(e.query);
      throw new InternalServerErrorException('NO SE GUARDO EL PACIENTE');
    }

    console.log(resp);
    return resp;
  }
  @Get(':nro_historia_clinica')
  async get_atencion(
    @Param('nro_historia_clinica') nro_historia_clinica: string,
  ) {
    const hcl = await this.Historia_Clinica_rep.findOne({
      where: { NRO_HCL: nro_historia_clinica },
    });

    const atencion = await this.Atencion_Rep.findOne({
      where: { ID_HC: hcl.ID_HC, ESTADO_ATENCION: 0 },
      relations: ['RIESGOS'],
    });

    if (atencion == null) {
      throw new NotFoundException('No existe Atencion');
    }
    /* const resp: InformacionGestanteDto = new InformacionGestanteDto({
          fecha_registro: atencion.FEC_REGISTRO,
          fecha_ultima_regla: atencion.FUR_ATENCION,
          numero_gestaciones: atencion.NRO_GESTACIONES,
          recien_nacidos_termino: atencion.RECIEN_NACIDOS_PREMATUROS,
          recien_nacidos_prematuros: atencion.RECIEN_NACIDOS_PREMATUROS,
          numero_abortos: atencion.NUMERO_ABORTOS,
          numero_hijos_vivos: atencion.HIJOS_VIVOS,
          observaciones: atencion.OBSERVACIONES,
        });*/
    return atencion;
  }
  @Patch(':nro_historia_clinica')
  async Actualizar_Atencion(
    @Param('nro_historia_clinica') nro_historia_clinica: string,
    @Body('informacion_gestante_form')
    informacion_gestante_form: InformacionGestanteDto,
    @Body('informacion_para_gestacion_form')
    informacion_para_gestacion_form: DatosParaGestacionDto,
  ) {
    const hcl = await this.Historia_Clinica_rep.findOne({
      where: { NRO_HCL: nro_historia_clinica },
    });

    const aten = await this.Atencion_Rep.findOne({
      where: { ID_HC: hcl.ID_HC, ESTADO_ATENCION: 0 },
    });

    const atencion_act = await this.Atencion_Rep.save({
      ID_ATENCION: aten.ID_ATENCION,
      FEC_REGISTRO: informacion_gestante_form.fecha_registro,
      FECHA_ATENCION_PRENATAL:
        informacion_gestante_form.fecha_atencion_prenatal,
      FECHA: informacion_gestante_form.fecha_registro,
      FUR_ATENCION: informacion_gestante_form.fecha_ultima_regla,
      ID_HC: hcl.ID_HC,
      ESTADO_ATENCION: 0,
      FECHA_CONFIRMO_GESTACION:
        informacion_para_gestacion_form.fecha_confirmacion_gestacion,
      FECHA_POSIBLE_PARTO: informacion_para_gestacion_form.fecha_probable_parto,
      HIJOS_VIVOS: informacion_gestante_form.numero_hijos_vivos,
      NRO_GESTACIONES: informacion_gestante_form.numero_gestaciones,
      NUMERO_ABORTOS: informacion_gestante_form.numero_abortos,
      OBSERVACIONES:
        informacion_gestante_form.observaciones == undefined
          ? ''
          : informacion_gestante_form.observaciones,
      FEC_ACTUALIZACION: new Date(),

      RECIEN_NACIDOS_PREMATUROS:
        informacion_gestante_form.recien_nacidos_prematuros,
      RECIEN_NACIDOS_TERMINO: informacion_gestante_form.recien_nacidos_termino,
    });
    return atencion_act;
  }
  @Get('atencion_puerperio_parto/:ID_ATENCION')
  async atencion_puerperio_parto(@Param('ID_ATENCION') ID_ATENCION: number) {
    const resp = await this.Atencion_Rep.findOne({
      where: { ID_ATENCION: ID_ATENCION },
      relations: ['AtencionesPuerperios', 'PARTOS'],
    });
    return resp;
  }
}
