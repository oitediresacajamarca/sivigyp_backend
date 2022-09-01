export interface HistoriaClinica {
  ID_HC: number;
  NRO_HCL: string;
  ID_PERSONA: number;
  COD_IPRESS: string;
  ID_CENTRO_POBLADO: string;
  TIPO_SEGURO: number;
  ID_GRADO_INSTRUCCION: number;
  BENEFICIARIA_JUNTOS: number;
  ESTADO_CIVIL: number;
  IDIOMA: string;
  RELIGION: string;
  GRUPO_SANGUINEO: string;
  FACTOR_SANGUINEO: string;
  TELEFONO: string;
  FEC_REGISTRO: Date;
  ESTADO_HC: number;
}
