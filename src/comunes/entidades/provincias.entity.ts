import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from 'typeorm';
import { DistritosEntity } from './distritos.entity';

@Entity('PROVINCIA')
export class ProvinciasEntity {
  @PrimaryColumn()
  ID_PROVINCIA: string;
  @Column()
  NOMBRE: string;
  @OneToMany(() => DistritosEntity, (data) => data.PROVINCIA)
  @JoinColumn({ name: 'ID_PROVINCIA' })
  DISTRITOS: DistritosEntity[];
}
