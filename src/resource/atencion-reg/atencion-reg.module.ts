import { Module } from '@nestjs/common';
import { AtencionRegService } from './atencion-reg.service';
import { AtencionRegController } from './atencion-reg.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AtencionReg } from './entities/atencion-reg.entity';
import { AtencionEntity } from 'src/comunes/entidades/atencion.entity';

@Module({
  controllers: [AtencionRegController],
  providers: [AtencionRegService],
  imports: [
    TypeOrmModule.forFeature([AtencionReg, AtencionEntity], 'db_svgyp'),
  ],
})
export class AtencionRegModule {}
