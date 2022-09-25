import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { HistoriaClinicaEntity } from './historia-clinica.entity';

@Entity('CENTRO_POBLADO')
export class CentroPobladoEntity {
  @PrimaryGeneratedColumn()
  ID_CENTROP: string;
  @Column()
  ID_DISTRITO: string;
  @Column()
  NOMBRE: string;
  @Column()
  LONGITUD: number;
  @Column()
  LATITUD: number;

  @OneToMany(() => HistoriaClinicaEntity, (data) => data.CENTRO_POBLADO)
  @JoinColumn({ name: 'ID_CENTROP' })
  HISTORIAS_CLINICAS: HistoriaClinicaEntity[];
}
