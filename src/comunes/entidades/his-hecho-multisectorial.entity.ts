import { Column, ViewEntity } from 'typeorm';

@ViewEntity('Hecho_Indicador_HIS')
export class HisHechoMultisectorialEntity {
  @Column()
  ID_UNIDAD_ANALISIS?: string;
  @Column()
  ID_INDICADOR?: string;
  @Column()
  ID_UBICACION?: string;
  @Column()
  ANIO?: string;
  @Column()
  MES?: string;
  @Column()
  CUMPLE?: string;
  @Column()
  FUENTE?: string;
  @Column()
  CODIGO_UNICO_HECHO?: string;
  @Column()
  JUNTOS?: string;
  @Column()
  CUNA_MAS?: string;
  @Column()
  TIPO_DOC_MO?: string;
  @Column()
  NUM_DOC_MO?: string;
  @Column()
  DOC_DNI?: string;
  @Column()
  DOC_CUI?: string;
  @Column()
  COD_PADRON_NOMINAL?: string;
  @Column()
  DIF_DIAS_NAC_MES_EVAL?: string;
  @Column()
  pn_FEC_NAC?: Date;
  @Column()
  ROT_NEU_VACS?: string;
  @Column()
  APELLIDO_PATERNO_NIÑO?: string;
  @Column()
  APELLIDO_MATERNO_NIÑO?: string;
  @Column()
  NOMBRES_NIÑO?: string;
  @Column()
  GENERO?: string;
  @Column()
  FECHA_NACIMIENTO_NIÑO?: Date;
  @Column()
  META_4?: string;
  @Column()
  DOC_CNV?: string;
  @Column()
  ntn_Codigo_Item?: string;
  @Column()
  ntn_Valor_Lab?: string;
  @Column()
  ntn_Fecha_Nacimiento_Paciente?: Date;
  @Column()
  ntn_Fecha_Atencion?: Date;
  @Column()
  ntn_ANIO_ATENCION?: string;
  @Column()
  ntn_MES_ATENCION?: string;
  @Column()
  ntn_DIA_ATENCION?: string;
  @Column()
  ntn_ID_ESTABLECIMIENTO?: string;
}
