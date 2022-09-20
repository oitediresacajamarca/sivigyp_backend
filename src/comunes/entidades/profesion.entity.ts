import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { TrabajadorIpressEntity } from './trabajador-ipress.entity';
@Entity('PROFESION')
export class ProfesionEntity {
  @PrimaryColumn()
  ID_PROFESION: number;
  @Column()
  DESCRIPCION_PROFESION: string;
  @Column()
  ID_COLEGIO: string;
  @Column()
  ESTADO: boolean;
  @Column()
  SECTOR?: string;
  @Column()
  ESPECIALIDAD?: string;
  @OneToMany(() => TrabajadorIpressEntity, (tra) => tra.profesion)
  TRABAJADORES: TrabajadorIpressEntity;
}
