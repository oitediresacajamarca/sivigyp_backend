export interface AtencionRegInterface {
  ID_ATENCION_REG: number;
  ID_ATENCION: number;
  FECHA_ATENCION_REG: Date;
  EDAD_GESTACIONAL: number;
  ESTADO_ATENCION: number;
  USU: string;
  ESTADO_CERRADO: number;
  OBSERVACIONES?: string;
}
