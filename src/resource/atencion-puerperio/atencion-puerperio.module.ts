import { Module } from '@nestjs/common';
import { AtencionPuerperioService } from './atencion-puerperio.service';
import { AtencionPuerperioController } from './atencion-puerperio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AtencionPartoEntity } from '../atencion-parto/entities/atencion-parto.entity';
import { AtencionPuerperioEntity } from 'src/comunes/entidades/atencion-puerperio.entity';

@Module({
  controllers: [AtencionPuerperioController],
  providers: [AtencionPuerperioService],
  imports: [
    TypeOrmModule.forFeature(
      [AtencionPartoEntity, AtencionPuerperioEntity],
      'db_svgyp',
    ),
  ],
})
export class AtencionPuerperioModule {}
