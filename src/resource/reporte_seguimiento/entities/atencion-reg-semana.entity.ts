import { AtencionEntity } from 'src/comunes/entidades/atencion.entity';
import { Column, JoinColumn, ManyToOne, ViewEntity } from 'typeorm';
import { ReporteSeguimiento } from './reporte_seguimiento.entity';

@ViewEntity('ATENCION_REG_SEMANA')
export class AtencionRegSemanaEntity {
  @Column()
  ID_ATENCION_REG?: number;
  @Column()
  ID_ATENCION?: number;
  @Column()
  FECHA_ATENCION_REG?: string;
  @Column()
  NUMERO_SEMANA?: number;
  @Column()
  ESTADO_ATENCION?: number;
  @Column()
  USU?: string;
  @Column()
  ESTADO_CERRADO?: number;
  @Column()
  OBSERVACIONES?: string;
  @ManyToOne(() => ReporteSeguimiento, (data) => data.ATENCIONES_SEMANALES)
  @JoinColumn({ name: 'ID_ATENCION' })
  ENCABESADO: ReporteSeguimiento;
  @ManyToOne(() => AtencionEntity, (data) => data.ATENCIONES_SEMANALES)
  @JoinColumn({ name: 'ID_ATENCION' })
  ATENCION: AtencionEntity;
}
