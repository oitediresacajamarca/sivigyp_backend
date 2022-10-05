import { Column, ViewEntity } from 'typeorm';

@ViewEntity('rpt_gestante')
export class RptCbetaAcumEntity {
  @Column()
  Id_Cita: string;
  @Column()
  fecha_atencion: Date;

  @Column()
  Anio: number;
  @Column()
  Mes: number;
  @Column()
  Dia: number;
  @Column()
  Lote: string;
  @Column()
  Num_Pag: number;
  @Column()
  Num_Reg: number;
  @Column()
  Id_Ups: string;
  @Column()
  subregion: string;
  @Column()
  Red: string;
  @Column()
  MicroRed: string;
  @Column()
  Codigo_Unico: string;
  @Column()
  Nombre_Establecimiento: string;
  @Column()
  id_tipo_documento: number;
  @Column()
  Id_Paciente: string;
  @Column()
  numero_documento: string;
  @Column()
  nombres: string;
  @Column()
  apellido_paterno: string;
  @Column()
  apellido_materno: string;
  @Column()
  fecha_nacimiento: Date;
  @Column()
  Historia_Clinica: string;
  @Column()
  Ficha_Familiar: string;
  @Column()
  Descripcion_Financiador: string;
  @Column()
  id_condicion_eess: number;
  @Column()
  id_condicion_serv: number;
  @Column()
  Edad_Reg: number;
  @Column()
  Tipo_Edad: string;
  @Column()
  Anio_Actual_Paciente: number;
  @Column()
  Mes_Actual_Paciente: number;
  @Column()
  Dia_Actual_Paciente: number;
  @Column()
  Ubigeo_Declarado: string;
  @Column()
  Domicilio_Declarado: string;
  @Column()
  Id_Turno: number;
  @Column()
  Genero: string;
  @Column()
  Id_Etnia: string;
  @Column()
  orden_atencion: number;
  @Column()
  Codigo_Item: string;
  @Column()
  Tipo_Diagnostico: string;
  @Column()
  Valor_Lab: string;
  @Column()
  Id_Correlativo_Lab: number;
  @Column()
  num_doc_atiende: string;
  @Column()
  nombre_personal: string;
  @Column()
  num_doc_registra: string;
  @Column()
  nombre_registrador: string;
  @Column()
  Fecha_Registro: Date;
  @Column()
  Fecha_Modificacion?: Date;
  @Column()
  id_punto_digitacion: number;
  @Column()
  Id_Personal: string;
  @Column()
  Peso?: number;
  @Column()
  Talla?: number;
}
