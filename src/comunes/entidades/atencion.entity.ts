import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ATENCION')
export class AtencionEntity {
  @PrimaryGeneratedColumn()
  ID_ATENCION: number;
  @Column()
  ID_HC: number;
  @Column()
  ID_RESPONSABLE: number;
  @Column()
  FECHA: Date;
  @Column()
  FEC_REGISTRO: Date;
  @Column()
  FUR_ATENCION: Date;
  @Column()
  NRO_GESTACIONES: number;
  @Column()
  TIPO_PARIEDAD: string;
  @Column()
  RECIEN_NACIDOS_TERMINO: number;
  @Column()
  RECIEN_NACIDOS_PREMATUROS: number;
  @Column()
  NUMERO_ABORTOS: number;
  @Column()
  HIJOS_VIVOS: number;
  @Column()
  FECHA_CONFIRMO_GESTACION: Date;
  @Column()
  FECHA_POSIBLE_PARTO: Date;
  @Column()
  OBSERVACIONES: string;
  @Column()
  USU: string;
  @Column()
  ESTADO_ATENCION: number;
  @Column()
  OBSERVACIONES_FIN?: string;
  @Column()
  FEC_ACTUALIZACION?: Date;
}
