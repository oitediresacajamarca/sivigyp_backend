import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from 'typeorm';
import { AtencionEntity } from './atencion.entity';

@Entity('RIESGOS')
export class RiesgosEntity {
  @PrimaryColumn()
  ID_RIESGO: number;
  @Column()
  NOMBRE: string;
  @ManyToMany(() => AtencionEntity, (data) => data.RIESGOS)
  @JoinTable({
    name: 'ATENCION_RIESGO',
    joinColumn: { name: 'ID_RIESGO', referencedColumnName: 'ID_RIESGO' },
    inverseJoinColumn: {
      name: 'ID_ATENCION',
      referencedColumnName: 'ID_ATENCION',
    },
  })
  ATENCIONES: AtencionEntity[];
}
