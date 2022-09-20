import { Module } from '@nestjs/common';
import { PersonalService } from './personal.service';
import { PersonalController } from './personal.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrabajadorIpressEntity } from 'src/comunes/entidades/trabajador-ipress.entity';
import { IpressEntity } from 'src/comunes/entidades/ipress.entity';

@Module({
  controllers: [PersonalController],
  providers: [PersonalService],
  imports: [
    TypeOrmModule.forFeature(
      [TrabajadorIpressEntity, IpressEntity],
      'db_svgyp',
    ),
  ],
})
export class PersonalModule {}
