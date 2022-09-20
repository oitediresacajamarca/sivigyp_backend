import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('RIESGOS')
export class RiesgosEntity {
  @PrimaryColumn()
  ID_RIESGO: number;
  @Column()
  NOMBRE: string;
}
