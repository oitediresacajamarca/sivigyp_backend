import { Module } from '@nestjs/common';
import { AtencionRegService } from './atencion-reg.service';
import { AtencionRegController } from './atencion-reg.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AtencionReg } from './entities/atencion-reg.entity';
import { AtencionEntity } from 'src/comunes/entidades/atencion.entity';
import { RptCbetaAcumEntity } from 'src/comunes/entidades/rpt_cbeta_acum.entity';
import { AtencionHisController } from './atencion-his/atencion-his.controller';

@Module({
  controllers: [AtencionRegController, AtencionHisController],
  providers: [AtencionRegService],
  imports: [
    TypeOrmModule.forFeature([AtencionReg, AtencionEntity], 'db_svgyp'),
    TypeOrmModule.forFeature([RptCbetaAcumEntity], 'BDHIS_MINSA'),
  ],
})
export class AtencionRegModule {}
