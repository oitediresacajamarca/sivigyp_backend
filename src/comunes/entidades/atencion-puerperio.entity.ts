import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AtencionEntity } from './atencion.entity';

@Entity('ATENCION_PUERPERIO')
export class AtencionPuerperioEntity {
  @PrimaryGeneratedColumn()
  ID_ATENCION_PUERPERIO?: number;
  @Column()
  ID_ATENCION?: number;
  @Column()
  FECHA_ATENCION: Date;
  @Column()
  FECHA_REGISTRO: Date;
  @Column()
  USU?: string;
  @Column()
  ESTADO_PUERPERIO: number;
  @Column()
  ESTADO_CERRADO: number;
  @Column()
  NRO_ATENCION: number;
  @ManyToOne(() => AtencionEntity, (data) => data.AtencionesPuerperios)
  @JoinColumn({ name: 'ID_ATENCION' })
  ATENCION?: AtencionEntity;
}
