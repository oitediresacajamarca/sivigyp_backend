import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AtencionEntity } from 'src/comunes/entidades/atencion.entity';
import { PadronGestanteHisEntity } from 'src/comunes/entidades/padron-gestante.entity';
import { Repository } from 'typeorm';
import { CreateReporteSeguimientoDto } from './dto/create-reporte_seguimiento.dto';
import { UpdateReporteSeguimientoDto } from './dto/update-reporte_seguimiento.dto';
import { ReporteSeguimiento } from './entities/reporte_seguimiento.entity';

@Injectable()
export class ReporteSeguimientoService {
  constructor(
    @InjectRepository(PadronGestanteHisEntity, 'BDHIS_MINSA')
    private padron_rep: Repository<PadronGestanteHisEntity>,
    @InjectRepository(AtencionEntity, 'db_svgyp')
    private Atencion_Rep: Repository<AtencionEntity>,
    @InjectRepository(ReporteSeguimiento, 'db_svgyp')
    private rep_sig_Rep: Repository<ReporteSeguimiento>,
  ) {}
  async generar_reporte_seguimientO() {
    const padron = await this.padron_rep.find();
    const rest = await Promise.all(
      padron.map(async (gestante) => {
        const atencion = await this.Atencion_Rep.createQueryBuilder('ATENCION')
          .leftJoinAndSelect('ATENCION.HistoriaClinica', 'HistoriaClinica')
          .leftJoinAndSelect('HistoriaClinica.PERSONA', 'PERSONA')
          .where('PERSONA.NRO_DOCUMENTO=:DNI AND ATENCION.ESTADO_ATENCION=0', {
            DNI: gestante.NUMERO_DOCUMENTO,
          })
          .getOne();

        if (!!atencion) {
          return { ...gestante, fur: atencion.FUR_ATENCION };
        }

        //return atencion;
      }),
    );

    return { ...rest, cantidad: rest.length };
  }
  async genera_reporte_seguimiento_sivi() {
    const resp = await this.rep_sig_Rep
      .createQueryBuilder('SEGUIMIENTO_SIVIGYP')
      .leftJoinAndSelect(
        'SEGUIMIENTO_SIVIGYP.ATENCIONES_SEMANALES',
        'ATENCIONES_SEMANALES',
      )
      .getMany();

    return resp;
  }

  async genera_reporte_seguimiento_sivi_ob() {
    const resp = await this.Atencion_Rep.createQueryBuilder('ATENCION')
      .leftJoinAndSelect(
        'ATENCION.ATENCIONES_SEMANALES',
        'ATENCIONES_SEMANALES',
      )
      .leftJoinAndSelect('ATENCION.HistoriaClinica', 'HistoriaClinica')
      .leftJoinAndSelect('HistoriaClinica.PERSONA', 'PERSONA')
      .leftJoinAndSelect('ATENCION.RIESGOS', 'RIESGOS')
      .leftJoinAndSelect('PERSONA.DISTRITO', 'DISTRITO')
      .leftJoinAndSelect('DISTRITO.PROVINCIA', 'PROVINCIA')
      .leftJoinAndSelect('HistoriaClinica.IPRESS', 'IPRESS')

      .leftJoinAndSelect('IPRESS.MICRORED', 'MICRORED')
      .leftJoinAndSelect('MICRORED.RED', 'RED')
      .leftJoinAndSelect('HistoriaClinica.CENTRO_POBLADO', 'CENTRO_POBLADO')
      .leftJoinAndSelect('ATENCION.PARTOS', 'PARTOS')
      .take(10)

      .getMany();

    return resp;
  }

  async genera_reporte_seguimiento_sivi_ob_2(filtro: any) {
    console.log(filtro)

    const resp = await this.Atencion_Rep.createQueryBuilder('ATENCION')
      .leftJoinAndSelect(
        'ATENCION.ATENCIONES_SEMANALES',
        'ATENCIONES_SEMANALES',
      )
      .leftJoinAndSelect('ATENCION.HistoriaClinica', 'HistoriaClinica')
      .leftJoinAndSelect('HistoriaClinica.PERSONA', 'PERSONA')
      .leftJoinAndSelect('ATENCION.RIESGOS', 'RIESGOS')
      .leftJoinAndSelect('PERSONA.DISTRITO', 'DISTRITO')
      .leftJoinAndSelect('DISTRITO.PROVINCIA', 'PROVINCIA')
      .leftJoinAndSelect('HistoriaClinica.IPRESS', 'IPRESS')
      .leftJoinAndSelect(
        'HistoriaClinica.ESTADO_CIVIL_DESCRIPCION',
        'ESTADO_CIVIL_DESCRIPCION',
      )
      .leftJoinAndSelect(
        'HistoriaClinica.GRADO_INSTRUCCION_DESCRIPCION',
        'GRADO_INSTRUCCION_DESCRIPCION',
      )
      .leftJoinAndSelect(
        'HistoriaClinica.TIPO_SEGURO_DESCRIPCION',
        'TIPO_SEGURO_DESCRIPCION',
      )

      .leftJoinAndSelect('IPRESS.MICRORED', 'MICRORED')
      .leftJoinAndSelect('MICRORED.RED', 'RED')
      .leftJoinAndSelect('HistoriaClinica.CENTRO_POBLADO', 'CENTRO_POBLADO')
      .leftJoinAndSelect('ATENCION.PARTOS', 'PARTOS')
      .leftJoinAndSelect('PARTOS.TIPO_ATENCION_PARTO', 'TIPO_ATENCION_PARTO')

      .where('(RED.ID_RED = :RED OR 1=:condicion_red)', {
        RED: parseInt(filtro.ID_RED),
        condicion_red: parseInt(filtro.ID_RED) == 0 ? 1 : 2,
      })
      .andWhere('(MICRORED.ID_MICRORED = :ID_MICRORED OR 1=:condicion_micro)', {
        ID_MICRORED: parseInt(filtro.ID_MICRORED),
        condicion_micro: parseInt(filtro.ID_MICRORED) == 0 ? 1 : 2,
      })
      .andWhere('(IPRESS.COD_IPRESS = :ID_IPRESS OR 1=:condicion_ipress)', {
        ID_IPRESS: parseInt(filtro.ID_IPRESS),
        condicion_ipress: parseInt(filtro.ID_IPRESS) == 0 ? 1 : 2,
      })
      .take(10000)

      .getMany();


    return resp;
  }

  create(createReporteSeguimientoDto: CreateReporteSeguimientoDto) {
    return 'This action adds a new reporteSeguimiento';
  }

  findAll() {
    return `This action returns all reporteSeguimiento`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reporteSeguimiento`;
  }

  update(id: number, updateReporteSeguimientoDto: UpdateReporteSeguimientoDto) {
    return `This action updates a #${id} reporteSeguimiento`;
  }

  remove(id: number) {
    return `This action removes a #${id} reporteSeguimiento`;
  }
}
