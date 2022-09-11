import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('GRADO_INSTRUCION')
export class GradoInstruccionEntity {
  @PrimaryColumn()
  ID_GRADO_INSTRUCCION: string;
  @Column()
  NOMBRE: string;
}
