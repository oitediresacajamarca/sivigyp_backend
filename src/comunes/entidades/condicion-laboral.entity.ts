import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { TrabajadorIpressEntity } from './trabajador-ipress.entity';

@Entity('CONDICION_LABORAL')
export class CondicionLaboralEntity {
  @PrimaryColumn()
  ID_CONDICION_LAB: number;
  @Column()
  DESCRIPCION: string;
  @OneToMany(
    () => TrabajadorIpressEntity,
    (data) => {
      data.codicion_laboral;
    },
  )
  trabajadores: TrabajadorIpressEntity[];
}
