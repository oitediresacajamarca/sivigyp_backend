import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
