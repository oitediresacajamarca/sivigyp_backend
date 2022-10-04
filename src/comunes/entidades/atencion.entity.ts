import { AtencionPartoEntity } from 'src/resource/atencion-parto/entities/atencion-parto.entity';
import { AtencionReg } from 'src/resource/atencion-reg/entities/atencion-reg.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AtencionPuerperioEntity } from './atencion-puerperio.entity';
import { HistoriaClinicaEntity } from './historia-clinica.entity';
import { RiesgosEntity } from './riesgos.entity';

@Entity('ATENCION')
export class AtencionEntity {
  @PrimaryGeneratedColumn()
  ID_ATENCION: number;
  @Column()
  ID_HC: number;
  @Column()
  ID_RESPONSABLE: number;
  @Column()
  FECHA: Date;
  @Column()
  FEC_REGISTRO: Date;
  @Column()
  FUR_ATENCION: Date;
  @Column()
  NRO_GESTACIONES: number;
  @Column()
  TIPO_PARIEDAD: string;
  @Column()
  RECIEN_NACIDOS_TERMINO: number;
  @Column()
  RECIEN_NACIDOS_PREMATUROS: number;
  @Column()
  NUMERO_ABORTOS: number;
  @Column()
  HIJOS_VIVOS: number;
  @Column()
  FECHA_CONFIRMO_GESTACION: Date;
  @Column()
  FECHA_POSIBLE_PARTO: Date;
  @Column()
  OBSERVACIONES: string;
  @Column()
  USU: string;
  @Column()
  ESTADO_ATENCION: number;
  @Column()
  OBSERVACIONES_FIN?: string;
  @Column()
  FEC_ACTUALIZACION?: Date;
  @Column()
  ESTADO_ACTUAL_GESTANTE?: string;
  @OneToMany(() => AtencionReg, (data) => data.ATENCION)
  @JoinColumn({ name: 'ID_ATENCION' })
  AtencionReg?: AtencionReg;
  @ManyToOne(() => HistoriaClinicaEntity, (data) => data.Atenciones)
  @JoinColumn({ name: 'ID_HC' })
  HistoriaClinica?: HistoriaClinicaEntity;
  @OneToMany(() => AtencionPartoEntity, (data) => data.ATENCION)
  @JoinColumn({ name: 'ID_ATENCION' })
  PARTOS: AtencionPartoEntity[];
  @ManyToMany(() => RiesgosEntity, (data) => data.ATENCIONES)
  @JoinTable({
    name: 'ATENCION_RIESGO',
    joinColumn: { name: 'ID_ATENCION', referencedColumnName: 'ID_ATENCION' },
    inverseJoinColumn: {
      name: 'ID_RIESGO',
      referencedColumnName: 'ID_RIESGO',
    },
  })
  RIESGOS: RiesgosEntity[];
  @OneToMany(() => AtencionPuerperioEntity, (data) => data.ATENCION)
  @JoinColumn({ name: 'ID_ATENCION' })
  AtencionesPuerperios?: AtencionPuerperioEntity[];
}
