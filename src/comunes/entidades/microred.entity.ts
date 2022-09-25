import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { IpressEntity } from './ipress.entity';
import { RedEntity } from './red.entity';

@Entity('MICRORED')
export class MicroredEntity {
  @PrimaryColumn()
  ID_MICRORED: number;
  @Column()
  ID_RED: number;
  @Column()
  NOMBRE: string;
  @OneToMany(() => IpressEntity, (data) => data.MICRORED)
  @JoinColumn({ name: 'ID_MICRORED' })
  IPRESES?: IpressEntity[];
  @ManyToOne(() => RedEntity, (data) => data.MICROREDES)
  @JoinColumn({ name: 'ID_RED' })
  RED?: RedEntity;
}
