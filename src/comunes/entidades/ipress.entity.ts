import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { HistoriaClinicaEntity } from './historia-clinica.entity';
import { MicroredEntity } from './microred.entity';

@Entity('IPRESS')
export class IpressEntity {
  @PrimaryColumn()
  COD_IPRESS: string;
  @Column()
  ID_UE: number;
  @Column()
  ID_DISTRITO: string;
  @Column()
  NOMBRE: string;
  @Column()
  DIRECCION: string;
  @Column()
  ID_MICRORED: number;
  @Column()
  CATEGORIA: string;
  @Column()
  TELEFONO: string;
  @Column()
  CORREO: string;
  @OneToMany(() => HistoriaClinicaEntity, (data) => data.IPRESS)
  @JoinColumn({ name: 'COD_IPRESS' })
  HISTORIAS_CLINICAS?: HistoriaClinicaEntity[];
  @ManyToOne(() => MicroredEntity, (data) => data.IPRESES)
  @JoinColumn({ name: 'ID_MICRORED' })
  MICRORED?: MicroredEntity;
}
