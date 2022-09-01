import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('DISTRITO')
export class DistritosEntity {
  @PrimaryColumn()
  ID_DISTRITO: string;
  @Column()
  ID_PROVINCIA: string;

  @Column()
  NOMBRE: string;
}
