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
import { MaestrosModule } from './comunes/controladores/maestros/maestros.module';
import { CentroPobladoEntity } from './comunes/entidades/centro-poblado.entity';
import { MstPacienteEntity } from './comunes/entidades/mst_paciente.entity';
import { GradoInstruccionEntity } from './comunes/entidades/grado-instruccion.entity';
import { AtencionGestanteModule } from './modulos/atencion-gestante/atencion-gestante.module';
import { AtencionEntity } from './comunes/entidades/atencion.entity';
import { AtencionRegModule } from './resource/atencion-reg/atencion-reg.module';
import { AtencionReg } from './resource/atencion-reg/entities/atencion-reg.entity';
import { AutentificacionModule } from './resource/autentificacion/autentificacion.module';
import { UsuarioEntity } from './comunes/entidades/usuario.entity';
import { RiesgosEntity } from './comunes/entidades/riesgos.entity';
import { PersonalModule } from './resource/personal/personal.module';
import { TrabajadorIpressEntity } from './comunes/entidades/trabajador-ipress.entity';
import { ProfesionEntity } from './comunes/entidades/profesion.entity';
import { CondicionLaboralEntity } from './comunes/entidades/condicion-laboral.entity';
import { MicroredEntity } from './comunes/entidades/microred.entity';
import { RedEntity } from './comunes/entidades/red.entity';
import { AtencionPartoModule } from './resource/atencion-parto/atencion-parto.module';
import { AtencionPartoEntity } from './resource/atencion-parto/entities/atencion-parto.entity';

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
        CentroPobladoEntity,
        GradoInstruccionEntity,
        AtencionEntity,
        AtencionReg,
        UsuarioEntity,
        RiesgosEntity,
        TrabajadorIpressEntity,
        ProfesionEntity,
        CondicionLaboralEntity,
        MicroredEntity,
        RedEntity,
        AtencionPartoEntity,
      ],
      extra: {
        validateConnection: false,
        trustServerCertificate: true,
      },
      options: { encrypt: false },
      name: 'db_svgyp',
    }),
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: '172.18.20.20',
      port: 1433,
      username: 'sa',
      synchronize: false,
      password: 'Intercambio1080',
      database: 'risc_2030',
      entities: [MstPacienteEntity],
      extra: {
        validateConnection: false,
        trustServerCertificate: true,
      },
      options: { encrypt: false },
      name: 'risc_2030',
    }),
    MaestrosModule,
    AtencionGestanteModule,
    AtencionRegModule,
    AutentificacionModule,
    PersonalModule,
    AtencionPartoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
