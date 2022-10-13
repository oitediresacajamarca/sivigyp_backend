import {
  Column,
  JoinColumn,
  OneToMany,
  PrimaryColumn,
  ViewEntity,
} from 'typeorm';
import { AtencionRegSemanaEntity } from './atencion-reg-semana.entity';

@ViewEntity('SEGUIMIENTO_SIVIGYP')
export class ReporteSeguimiento {
  @PrimaryColumn()
  ID_ATENCION: number;
  @Column()
  RED?: string;
  @Column()
  PROVINCIA?: string;
  @Column()
  DISTRITO?: string;
  @Column()
  NOMBRE?: string;
  @Column()
  MICRORED?: string;
  @Column()
  IPRESS?: string;
  @Column()
  ID_CENTROP?: string;
  @Column()
  APELLIDO_PAT?: string;
  @Column()
  APELLIDO_MAT?: string;
  @Column()
  NOMBRES?: string;
  @Column()
  FECHA_NAC?: string;
  @Column()
  EDAD?: string;
  @Column()
  ESTADO_CIVIL?: number;
  @Column()
  TIP_DOC?: string;
  @Column()
  NRO_DOCUMENTO?: string;
  @Column()
  EST_CIVIL?: string;
  @Column()
  TIP_SEG?: string;
  @Column()
  JUNTOS?: string;
  @Column()
  GRADO_INST?: string;
  @Column()
  IDIOMA?: string;
  @Column()
  RELIGION?: string;
  @Column()
  TELEFONO?: string;
  @Column()
  CORREO?: string;
  @Column()
  CODIGO?: string;
  @Column()
  FUR_ATENCION?: Date;
  @Column()
  FECHA_POSIBLE_PARTO?: string;
  @Column()
  FECHA_CONFIRMO_GESTACION?: string;
  @Column()
  FEC_1APN?: string;
  @Column()
  EG_EN_1CPN?: number;
  @Column()
  GRUPO_SANGUINEO?: string;
  @Column()
  FACTOR_SANGUINEO?: string;
  @Column()
  EDAD_C_G?: string;
  @Column()
  OBSERVACIONES_FIN?: string;
  @Column()
  OBSERVACIONES?: string;
  @Column()
  RENIPRESS?: string;

  @OneToMany(() => AtencionRegSemanaEntity, (data) => data.ENCABESADO)
  @JoinColumn({ name: 'ID_ATENCION' })
  ATENCIONES_SEMANALES: AtencionRegSemanaEntity[];
}
