import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from 'typeorm';
import { HistoriaClinicaEntity } from './historia-clinica.entity';

@Entity('GRADO_INSTRUCION')
export class GradoInstruccionEntity {
  @PrimaryColumn()
  ID_GRADO_INSTRUCCION: string;
  @Column()
  NOMBRE: string;
  @OneToMany(
    () => HistoriaClinicaEntity,
    (data) => data.GRADO_INSTRUCCION_DESCRIPCION,
  )
  @JoinColumn({ name: 'ID_GRADO_INSTRUCCION' })
  HISTORIAS_CLINICAS: HistoriaClinicaEntity[];
}
