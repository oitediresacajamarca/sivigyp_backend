import { Controller, Get, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { IpressEntity } from 'src/comunes/entidades/ipress.entity';
import { Repository } from 'typeorm';

@Controller('ipress')
export class IpressController {
  constructor(
    @InjectRepository(IpressEntity, 'db_svgyp')
    private Ipress_rep: Repository<IpressEntity>,
  ) {}

  @Get('microred/:cod_microred')
  async devolver_por_microred(@Param('cod_microred') cod_microred: number) {
    const resp = await this.Ipress_rep.find({
      where: { ID_MICRORED: cod_microred },
    });
    return resp;
  }
}
