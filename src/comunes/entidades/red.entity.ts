import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from 'typeorm';
import { MicroredEntity } from './microred.entity';

@Entity('RED')
export class RedEntity {
  @PrimaryColumn()
  ID_RED: number;
  @Column()
  NOMBRE: string;
  @OneToMany(() => MicroredEntity, (data) => data.RED)
  @JoinColumn({ name: 'ID_RED' })
  MICROREDES?: MicroredEntity[];
}
