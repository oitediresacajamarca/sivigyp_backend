import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DistritosEntity } from './comunes/entidades/distritos.entity';
import { HistoriaClinicaEntity } from './comunes/entidades/historia-clinica.entity';
import { IpressEntity } from './comunes/entidades/ipress.entity';
import { PersonaEntity } from './comunes/entidades/persona.entity';
import { ProvinciasEntity } from './comunes/entidades/provincias.entity';
import { GestanteModule } from './modulos/gestante/gestante.module';

@Module({
  imports: [
    GestanteModule,
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa',
      synchronize: false,
      password: '.',
      database: 'db_svgyp',
      entities: [
        PersonaEntity,
        HistoriaClinicaEntity,
        IpressEntity,
        ProvinciasEntity,
        DistritosEntity,
      ],
      extra: {
        validateConnection: false,
        trustServerCertificate: true,
      },
      options: { encrypt: false },
      name: 'db_svgyp',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
