import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('LOGIN')
export class UsuarioEntity {
    @PrimaryGeneratedColumn()
  ID: number;
  @Column()
  LOGIN: string;
  @Column()
  PASSWORD: string;
  @Column()
  CODIGO_AMBITO: string;
}
