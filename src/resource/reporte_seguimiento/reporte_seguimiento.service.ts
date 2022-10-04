import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AtencionEntity } from 'src/comunes/entidades/atencion.entity';
import { PadronGestanteHisEntity } from 'src/comunes/entidades/padron-gestante.entity';
import { Repository } from 'typeorm';
import { CreateReporteSeguimientoDto } from './dto/create-reporte_seguimiento.dto';
import { UpdateReporteSeguimientoDto } from './dto/update-reporte_seguimiento.dto';

@Injectable()
export class ReporteSeguimientoService {
  constructor(
    @InjectRepository(PadronGestanteHisEntity, 'BDHIS_MINSA')
    private padron_rep: Repository<PadronGestanteHisEntity>,
    @InjectRepository(AtencionEntity, 'db_svgyp')
    private Atencion_Rep: Repository<AtencionEntity>,
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
        console.log(gestante);
        if (!!atencion) {
          return { ...gestante, fur: atencion.FUR_ATENCION };
        }

        //return atencion;
      }),
    );

    return { ...rest, cantidad: rest.length };
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
