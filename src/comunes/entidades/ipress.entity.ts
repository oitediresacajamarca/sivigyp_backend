import { Column, Entity, PrimaryColumn } from 'typeorm';

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
}
