import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HisHechoMultisectorialEntity } from 'src/comunes/entidades/his-hecho-multisectorial.entity';
import { RptCbetaNinioEntity } from 'src/comunes/entidades/rpt-cbeta-ninio.entity';
import { Like, Repository } from 'typeorm';
import { CreateMultisectorialHechoDto } from './dto/create-multisectorial-hecho.dto';
import { UpdateMultisectorialHechoDto } from './dto/update-multisectorial-hecho.dto';

@Injectable()
export class MultisectorialHechoService {
  constructor(
    @InjectRepository(HisHechoMultisectorialEntity, 'MULTISECTORIAL')
    private multi: Repository<HisHechoMultisectorialEntity>,
    @InjectRepository(RptCbetaNinioEntity, 'BDHIS_MINSA')
    private rpt: Repository<RptCbetaNinioEntity>,
  ) {}

  create(createMultisectorialHechoDto: CreateMultisectorialHechoDto) {
    return 'This action adds a new multisectorialHecho';
  }

  findAll() {
    return `This action returns all multisectorialHecho`;
  }

  findOne(id: number) {
    return `This action returns a #${id} multisectorialHecho`;
  }

  update(
    id: number,
    updateMultisectorialHechoDto: UpdateMultisectorialHechoDto,
  ) {
    return `This action updates a #${id} multisectorialHecho`;
  }

  remove(id: number) {
    return `This action removes a #${id} multisectorialHecho`;
  }
  async detalle(filtro: any) {
    console.log(filtro);
    /* const resp = await this.multi.find({
      where: {
        ID_UBICACION: Like(filtro.ambito + '%'),
        ID_INDICADOR: filtro.indicador,
      },
      take: 1000000,
    });
*/
    const resp = await this.multi
      .createQueryBuilder('hecho')
      .andWhere('hecho.ID_UBICACION like :ambito', {
        ambito: filtro.ambito + '%',
      })
      .andWhere(`(hecho.ID_INDICADOR = :indicador OR ''=:indicador)`, {
        indicador: filtro.indicador,
      })
      .andWhere('(hecho.ANIO = :anio OR 0=:anio)', {
        anio: filtro.anio,
      })
      .andWhere('(hecho.MES = :mes OR 0=:mes)', {
        mes: filtro.mes,
      })
      .andWhere(
        `(hecho.ID_UNIDAD_ANALISIS = :nro_documento OR ''=:nro_documento)`,
        {
          nro_documento: filtro.nro_documento,
        },
      )
      .getMany();
    return resp;
  }

  async find_numero_documento(NRO_DOCUMENTO: string) {
    const resp = await this.rpt.find({
      where: { numero_documento: NRO_DOCUMENTO },
      order: { fecha_atencion: 'DESC' },
    });
    return resp;
  }
}
