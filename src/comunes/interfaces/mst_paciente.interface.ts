export interface MstPaciente {
  id_paciente: string;
  id_tipo_documento: number;
  numero_documento: string;
  apellido_paterno: string;
  apellido_materno: string;
  nombres: string;
  fecha_nacimiento: Date;
  genero: string;
  id_etnia: number;
  historia_clinica: string;
  ficha_familiar: string;
  ubigeo_nacimiento: string;
  ubigeo_reniec: string;
  domicilio_reniec: string;
  ubigeo_declarado: string;
  domicilio_declarado: string;
  referencia_domicilio: string;
  id_pais: string;
  id_establecimiento: number;
  id_punto_digitacion: number;
  fecha_alta?: Date;
}
