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
import { RptCbetaAcumEntity } from './comunes/entidades/rpt_cbeta_acum.entity';
import { RiesgosModule } from './resource/riesgos/riesgos.module';
import { AtencionPuerperioModule } from './resource/atencion-puerperio/atencion-puerperio.module';
import { AtencionPuerperioEntity } from './comunes/entidades/atencion-puerperio.entity';
import { PadronGestanteModule } from './resource/padron-gestante/padron-gestante.module';
import { PadronGestanteHisEntity } from './comunes/entidades/padron-gestante.entity';
import { ReporteSeguimientoModule } from './resource/reporte_seguimiento/reporte_seguimiento.module';
import { NacimientoModule } from './resource/nacimiento/nacimiento.module';
import { Nacimiento } from './resource/nacimiento/entities/nacimiento.entity';
import { PadronGestanteSivEntity } from './comunes/entidades/padron-gestante-siv.entity';
import { ReporteSeguimiento } from './resource/reporte_seguimiento/entities/reporte_seguimiento.entity';
import { AtencionRegSemanaEntity } from './resource/reporte_seguimiento/entities/atencion-reg-semana.entity';
import { Establecimientos } from './comunes/entidades/establecimientos';
import { EstadoCivilEntity } from './comunes/entidades/estado-civil.entity';
import { TipoSeguroEntity } from './comunes/entidades/tipo-seguro.entity';
import { TipoAtencionPartoEntity } from './comunes/entidades/tipo-atencion-parto.entity';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MultisectorialHechoModule } from './resource/multisectorial-hecho/multisectorial-hecho.module';
import { MultisectorialHecho } from './resource/multisectorial-hecho/entities/multisectorial-hecho.entity';
import { HisHechoMultisectorialEntity } from './comunes/entidades/his-hecho-multisectorial.entity';
import { RptCbetaNinioEntity } from './comunes/entidades/rpt-cbeta-ninio.entity';
import { HelpersController } from './comunes/controladores/helpers/helpers.controller';

@Module({
  imports: [
    GestanteModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'sivigyp'),
    }),
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: (() => {
        return process.env.DB_SIVIGYP_HOST;
      })(),
      port: 1433,
      username: process.env.DB_USUARIO_SIVI,
      synchronize: false,
      password: process.env.DB_PASSWORD_SIVI,
      database: process.env.DB_DATABASE_SIVI,
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
        AtencionPuerperioEntity,
        Nacimiento,
        PadronGestanteSivEntity,
        ReporteSeguimiento,
        AtencionRegSemanaEntity,
        EstadoCivilEntity,
        TipoSeguroEntity,
        TipoAtencionPartoEntity,
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
      host: process.env.DB_RISC_HOST,
      port: 1433,
      username: process.env.DB_USUARIO_RISC,
      synchronize: false,
      password: process.env.DB_PASSWORD_RISC,
      database: process.env.DB_DATABASE_RISC,
      entities: [MstPacienteEntity],
      extra: {
        validateConnection: false,
        trustServerCertificate: true,
        query_timeout: 80000,
        statement_timeout: 80000,
      },
      options: { encrypt: false },
      name: 'risc_2030',
    }),
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: (() => {
        return process.env.DB_HISMINSA_HOST;
      })(),
      port: 1433,
      username: process.env.DB_USUARIO_HISMINSA,
      synchronize: false,
      password: process.env.DB_PASSWORD_HISMINSA,
      database: process.env.DB_DATABASE_HISMINSA,
      entities: [
        RptCbetaAcumEntity,
        PadronGestanteHisEntity,
        RptCbetaNinioEntity,
      ],
      pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000,
      },
      extra: {
        validateConnection: false,
        trustServerCertificate: true,
        query_timeout: 80000,
        statement_timeout: 80000,
      },
      options: { encrypt: false },
      requestTimeout: 360_000,
      name: 'BDHIS_MINSA',
    }),
    TypeOrmModule.forRoot({
      type: 'mssql',
      //  host: '172.18.20.21',
      host: process.env.DB_ONEVISION_HOST,
      port: 1433,
      username: process.env.DB_USUARIO_ONEVISION,
      synchronize: false,
      password: process.env.DB_PASSWORD_ONEVISION,
      database: process.env.DB_DATABASE_ONEVISION,
      entities: [Establecimientos],
      pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000,
      },
      extra: {
        validateConnection: false,
        trustServerCertificate: true,
        query_timeout: 80000,
        statement_timeout: 80000,
      },
      options: { encrypt: false },
      requestTimeout: 360_000,
      name: 'ONE_VISION',
    }),
    TypeOrmModule.forRoot({
      type: 'mssql',
      //  host: '172.18.20.21',
      host: process.env.DB_MULTI_HOST,
      port: 1433,
      username: process.env.DB_USUARIO_MULTI,
      synchronize: false,
      password: process.env.DB_PASSWORD_MULTI,
      database: process.env.DB_MULTI_DATABASE,
      entities: [HisHechoMultisectorialEntity],
      pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000,
      },
      extra: {
        validateConnection: false,
        trustServerCertificate: true,
        query_timeout: 80000,
        statement_timeout: 80000,
      },
      options: { encrypt: false },
      requestTimeout: 360_000,
      name: 'MULTISECTORIAL',
    }),
    MaestrosModule,
    AtencionGestanteModule,
    AtencionRegModule,
    AutentificacionModule,
    PersonalModule,
    AtencionPartoModule,
    RiesgosModule,
    AtencionPuerperioModule,
    PadronGestanteModule,
    ReporteSeguimientoModule,
    NacimientoModule,
    MultisectorialHechoModule,
  ],
  controllers: [AppController, HelpersController],
  providers: [AppService],
})
export class AppModule {}
