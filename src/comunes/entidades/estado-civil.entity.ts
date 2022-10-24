import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from 'typeorm';
import { HistoriaClinicaEntity } from './historia-clinica.entity';

@Entity('ESTADO_CIVIL')
export class EstadoCivilEntity {
  @PrimaryColumn()
  ID_ESTADO_CIVIL: number;
  @Column()
  NOMBRE: string;
  @OneToMany(
    () => HistoriaClinicaEntity,
    (data) => {
      data.ESTADO_CIVIL_DESCRIPCION;
    },
  )
  @JoinColumn({ name: 'ID_ESTADO_CIVIL' })
  HISTORIAS: HistoriaClinicaEntity[];
}
