import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AtencionEntity } from './atencion.entity';
import { CentroPobladoEntity } from './centro-poblado.entity';
import { EstadoCivilEntity } from './estado-civil.entity';
import { GradoInstruccionEntity } from './grado-instruccion.entity';
import { IpressEntity } from './ipress.entity';
import { PersonaEntity } from './persona.entity';
import { TipoSeguroEntity } from './tipo-seguro.entity';

@Entity('HISTORIA_CLINICA')
export class HistoriaClinicaEntity {
  @PrimaryGeneratedColumn()
  ID_HC: number;
  @Column()
  NRO_HCL: string;
  @Column()
  ID_PERSONA: number;
  @Column()
  COD_IPRESS: string;
  @Column()
  ID_CENTRO_POBLADO: string;
  @Column()
  TIPO_SEGURO: number;
  @Column()
  ID_GRADO_INSTRUCCION: number;
  @Column()
  BENEFICIARIA_JUNTOS: number;
  @Column()
  ESTADO_CIVIL: number;
  @Column()
  IDIOMA: string;
  @Column()
  RELIGION: string;
  @Column()
  GRUPO_SANGUINEO: string;
  @Column()
  FACTOR_SANGUINEO: string;
  @Column()
  TELEFONO: string;
  @Column()
  FEC_REGISTRO: Date;
  @Column()
  ESTADO_HC: number;

  @BeforeInsert()
  insertDates() {
    this.RELIGION = this.RELIGION.toUpperCase();
    this.IDIOMA = this.IDIOMA.toUpperCase();
  }
  @OneToMany(() => AtencionEntity, (data) => data.HistoriaClinica)
  @JoinColumn({ name: 'ID_HC' })
  Atenciones?: AtencionEntity[];
  @ManyToOne(() => PersonaEntity, (data) => data.HISTORIAS)
  @JoinColumn({ name: 'ID_PERSONA' })
  PERSONA?: PersonaEntity;
  @ManyToOne(() => IpressEntity, (data) => data.HISTORIAS_CLINICAS)
  @JoinColumn({ name: 'COD_IPRESS' })
  IPRESS?: IpressEntity;
  @ManyToOne(() => CentroPobladoEntity, (data) => data.HISTORIAS_CLINICAS)
  @JoinColumn({ name: 'ID_CENTRO_POBLADO' })
  CENTRO_POBLADO?: CentroPobladoEntity;
  @OneToOne(
    () => EstadoCivilEntity,
    (data) => {
      data.HISTORIAS;
    },
  )
  @JoinColumn({ name: 'ESTADO_CIVIL' })
  ESTADO_CIVIL_DESCRIPCION: EstadoCivilEntity;

  @ManyToOne(() => TipoSeguroEntity, (data) => data.HISTORIAS_CLINICAS)
  @JoinColumn({ name: 'TIPO_SEGURO' })
  TIPO_SEGURO_DESCRIPCION?: TipoSeguroEntity;
  @ManyToOne(() => GradoInstruccionEntity, (data) => data.HISTORIAS_CLINICAS)
  @JoinColumn({ name: 'ID_GRADO_INSTRUCCION' })
  GRADO_INSTRUCCION_DESCRIPCION?: GradoInstruccionEntity;
}
