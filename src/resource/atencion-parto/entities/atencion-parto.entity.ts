import { AtencionEntity } from 'src/comunes/entidades/atencion.entity';
import { Nacimiento } from 'src/resource/nacimiento/entities/nacimiento.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('ATENCION_PARTO')
export class AtencionPartoEntity {
  @PrimaryGeneratedColumn()
  ID_ATENCION_PARTO: number;
  @Column()
  ID_ATENCION: number;
  @Column()
  FECHA_PARTO: Date;
  @Column()
  HORA_PARTO: string;
  @Column()
  TIPO_PARTO: number;
  @Column()
  LUGAR_PARTO: string;
  @Column()
  ID_ATENDIO_PARTO: number;
  @Column()
  TIPO_RECIEN_NACIDO: number;
  @Column()
  RN_VIVO: number;
  @Column()
  RN_SEXO: number;
  @Column()
  RN_PESO: number;
  @Column()
  USU: string;
  @Column()
  FEC_REGISTRO: Date;
  @Column()
  EDAD_GESTACIONAL: number;
  @ManyToOne(() => AtencionEntity, (data) => data.PARTOS)
  @JoinColumn({ name: 'ID_ATENCION' })
  ATENCION: AtencionEntity;
  @OneToMany(() => Nacimiento, (data) => data.PARTO)
  @JoinColumn({ name: 'ID_PARTO' })
  NACIMIENTOS: Nacimiento[];
}
