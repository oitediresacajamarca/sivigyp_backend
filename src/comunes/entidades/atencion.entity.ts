import { AtencionReg } from 'src/resource/atencion-reg/entities/atencion-reg.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { HistoriaClinicaEntity } from './historia-clinica.entity';

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
  @OneToOne(() => AtencionReg, (data) => data.ATENCION)
  @JoinColumn({ name: 'ID_ATENCION' })
  AtencionReg?: AtencionReg;
  @ManyToOne(() => HistoriaClinicaEntity, (data) => data.Atenciones)
  @JoinColumn({ name: 'ID_HC' })
  HistoriaClinica?: HistoriaClinicaEntity;
}
