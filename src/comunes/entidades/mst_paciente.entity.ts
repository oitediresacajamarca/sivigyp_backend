import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('mst_paciente')
export class MstPacienteEntity {
  @PrimaryGeneratedColumn()
  id_paciente: string;
  @Column()
  id_tipo_documento: number;
  @Column()
  numero_documento: string;
  @Column()
  apellido_paterno: string;
  @Column()
  apellido_materno: string;
  @Column()
  nombres: string;
  @Column()
  fecha_nacimiento: Date;
  @Column()
  genero: string;
  @Column()
  id_etnia: number;
  @Column()
  historia_clinica: string;
  @Column()
  ficha_familiar: string;
  @Column()
  ubigeo_nacimiento: string;
  @Column()
  ubigeo_reniec: string;
  @Column()
  domicilio_reniec: string;
  @Column()
  ubigeo_declarado: string;
  @Column()
  domicilio_declarado: string;
  @Column()
  referencia_domicilio: string;
  @Column()
  id_pais: string;
  @Column()
  id_establecimiento: number;
  @Column()
  id_punto_digitacion: number;
  @Column()
  fecha_alta?: Date;
}
