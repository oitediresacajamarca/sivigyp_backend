import { Controller, Get, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CentroPobladoEntity } from 'src/comunes/entidades/centro-poblado.entity';
import { DistritosEntity } from 'src/comunes/entidades/distritos.entity';
import { ProvinciasEntity } from 'src/comunes/entidades/provincias.entity';
import { Repository } from 'typeorm';

@Controller('distribucion-geografica')
export class DistribucionGeograficaController {
  constructor(
    @InjectRepository(ProvinciasEntity, 'db_svgyp')
    private Provincia_Rep: Repository<ProvinciasEntity>,
    @InjectRepository(DistritosEntity, 'db_svgyp')
    private Distrito_Rep: Repository<DistritosEntity>,
    @InjectRepository(CentroPobladoEntity, 'db_svgyp')
    private Centro_Rep: Repository<CentroPobladoEntity>,
  ) {}

  @Get('provincias')
  async provincias() {
    const resp = await this.Provincia_Rep.find();
    return resp;
  }
  @Get('distritos')
  async distritos() {
    const resp = await this.Distrito_Rep.find();
    return resp;
  }
  @Get('distritos/provincia/:cod_provincia')
  async distritos_por_provincia(@Param('cod_provincia') cod_provincia: string) {
    const resp = await this.Distrito_Rep.find({
      where: { ID_PROVINCIA: cod_provincia },
    });
    return resp;
  }
  @Get('centros_poblados')
  async centros_poblados() {
    const resp = await this.Centro_Rep.find();
    return resp;
  }
  @Get('centros_poblados/distrito/:cod_distrito')
  async centros_poblados_por_distrito(@Param('cod_distrito') cod_distrito) {
    const resp = await this.Centro_Rep.find({
      where: { ID_DISTRITO: cod_distrito },
    });
    return resp;
  }
}
