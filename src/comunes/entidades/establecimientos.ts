import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('Establecimientos')
export class Establecimientos {
  @PrimaryColumn()
  Id?: number;
  @Column()
  IdInstitucion?: number;
  @Column()
  Latitud?: string;
  @Column()
  Longitud?: string;
  @Column()
  Nombre?: string;
  @Column()
  Direccion?: string;
  @Column()
  Responsable?: string;
  @Column()
  Categoria?: string;
  @Column()
  Telefono?: string;
  @Column()
  Horario?: string;
  @Column()
  Documento?: string;
  @Column()
  Ruc?: string;
  @Column()
  Estado?: number;
  @Column()
  IdCategorias?: number;
  @Column()
  IdSuperior?: number;
  @Column()
  Temp?: string;
  @Column()
  TempM?: string;
  @Column()
  TempM2?: string;
  @Column()
  IdClasificacionEstablecimientos?: number;
  @Column()
  IdDistritos?: string;
  @Column()
  IdTiposEstablecimientos?: number;
  @Column()
  IdNivelesEstablecimientos?: number;
  @Column()
  IdUnidadesEjecutoras?: number;
  @Column()
  IdUsuarioCrea?: number;
  @Column()
  FechaCrea?: Date;
  @Column()
  idEjecutora?: number;
  @Column()
  idRed?: number;
  @Column()
  idMicrored?: number;
  @Column()
  nombreMicrored?: string;
  @Column()
  InicioActividad?: Date;
  @Column()
  nomRed?: string;
  @Column()
  nomMicrored?: string;
  @Column()
  ris_id?: number;
  @Column()
  codRed?: number;
  @Column()
  vinculado?: boolean;
  @Column()
  zona_sanitaria_id?: number;
  @Column()
  puerta_entrada_id?: number;
}
