import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from 'typeorm';
import { HistoriaClinicaEntity } from './historia-clinica.entity';

@Entity('TIPO_SEGURO')
export class TipoSeguroEntity {
  @PrimaryColumn()
  ID_TIPO_SEGURO: number;
  @Column()
  NOMBRE: string;
  @Column()
  ABRV: string;
  @OneToMany(
    () => HistoriaClinicaEntity,
    (data) => data.TIPO_SEGURO_DESCRIPCION,
  )
  @JoinColumn({ name: 'ID_TIPO_SEGURO' })
  HISTORIAS_CLINICAS: HistoriaClinicaEntity[];
}
