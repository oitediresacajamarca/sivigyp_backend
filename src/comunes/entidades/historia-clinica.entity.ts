import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('HISTORIA_CLINICA')
export class HistoriaClinicaEntity {
  @PrimaryGeneratedColumn()
  ID_HC: number;
  @Column()
  NRO_HCL: string;
  @Column()
  ID_PERSONA: number;
  @Column()
  COD_IPRESS: string;
  @Column()
  ID_CENTRO_POBLADO: string;
  @Column()
  TIPO_SEGURO: number;
  @Column()
  ID_GRADO_INSTRUCCION: number;
  @Column()
  BENEFICIARIA_JUNTOS: number;
  @Column()
  ESTADO_CIVIL: number;
  @Column()
  IDIOMA: string;
  @Column()
  RELIGION: string;
  @Column()
  GRUPO_SANGUINEO: string;
  @Column()
  FACTOR_SANGUINEO: string;
  @Column()
  TELEFONO: string;
  @Column()
  FEC_REGISTRO: Date;
  @Column()
  ESTADO_HC: number;
}
