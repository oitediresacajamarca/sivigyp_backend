import { Column, ViewEntity } from 'typeorm';
@ViewEntity('PADRON_SIVIGYP')
export class PadronGestanteSivEntity {
  @Column()
  RED: string;
  @Column()
  MICRORED: string;
  @Column()
  PROVINCIA: string;
  @Column()
  DISTRITO: string;
  @Column()
  CP: string;
  @Column()
  IPRESS: string;
  @Column()
  COD_IPRESS: string;
  @Column()
  APELLIDO_PATERNO: string;
  @Column()
  APELLIDO_MATERNO: string;
  @Column()
  NOMBRES: string;
  @Column()
  FECHA_NAC: Date;
  @Column()
  EDAD: number;
  @Column()
  ESTADO_CIVIL: number;
  @Column()
  TIPO_DOCUMENTO: number;

  @Column()
  TIPO_SEGURO: number;
  @Column()
  GRADO_INSTRUCION: string;
  @Column()
  BENEFICIARIA_JUNTOS: number;
  @Column()
  IDIOMA: string;
  @Column()
  FUR_ATENCION: Date;
  @Column()
  FECHA_POSIBLE_PARTO: Date;
  @Column()
  FEC_REGISTRO: Date;
  @Column()
  NRO_GESTACIONES: number;
  @Column()
  HIJOS_VIVOS: number;
  @Column()
  NRO_DOCUMENTO: string;
  @Column()
  DIRECCION: string;
  @Column()
  FECHA_PAP: Date;
  @Column()
  RIESGOS: string;
}
