export interface Atencion {
  ID_ATENCION: number;
  ID_HC: number;
  ID_RESPONSABLE: number;
  FECHA: Date;
  FEC_REGISTRO: Date;
  FUR_ATENCION: Date;
  NRO_GESTACIONES: number;
  TIPO_PARIEDAD: string;
  RECIEN_NACIDOS_TERMINO: number;
  RECIEN_NACIDOS_PREMATUROS: number;
  NUMERO_ABORTOS: number;
  HIJOS_VIVOS: number;
  FECHA_CONFIRMO_GESTACION: Date;
  FECHA_POSIBLE_PARTO: Date;
  OBSERVACIONES: string;
  USU: string;
  ESTADO_ATENCION: number;
  OBSERVACIONES_FIN?: string;
  FEC_ACTUALIZACION?: Date;
}
