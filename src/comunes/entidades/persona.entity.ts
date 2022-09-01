import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('PERSONA')
export class PersonaEntity {
  @PrimaryGeneratedColumn()
  ID_PERSONA: number;
  @Column()
  ID_TIPOD: number;
  @Column()
  NRO_DOCUMENTO: string;
  @Column()
  ID_GENERO: number;
  @Column()
  NOMBRES: string;
  @Column()
  APELLIDO_PAT: string;
  @Column()
  APELLIDO_MAT: string;
  @Column()
  ID_DISTRITO: string;
  @Column()
  DIRECCION: string;
  @Column()
  FECHA_NAC: Date;
  @Column()
  TELEFONO: string;
  @Column()
  CORREO: string;
}
