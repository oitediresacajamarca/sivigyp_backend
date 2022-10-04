import { Module } from '@nestjs/common';
import { PadronGestanteService } from './padron-gestante.service';
import { PadronGestanteController } from './padron-gestante.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PadronGestanteHisEntity } from 'src/comunes/entidades/padron-gestante.entity';

@Module({
  controllers: [PadronGestanteController],
  providers: [PadronGestanteService],
  imports: [TypeOrmModule.forFeature([PadronGestanteHisEntity], 'BDHIS_MINSA')],
})
export class PadronGestanteModule {}
