import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { HistoriaClinica } from '../interfaces/historia-clinica.interface';
import { DistritosEntity } from './distritos.entity';
import { HistoriaClinicaEntity } from './historia-clinica.entity';
import { TrabajadorIpressEntity } from './trabajador-ipress.entity';

@Entity('PERSONA')
export class PersonaEntity {
  @PrimaryGeneratedColumn()
  ID_PERSONA?: number;
  @Column()
  ID_TIPOD: number;
  @Column()
  NRO_DOCUMENTO: string;
  @Column()
  ID_GENERO: number;
  @Column()
  NOMBRES: string;
  @Column()
  APELLIDO_PAT: string;
  @Column()
  APELLIDO_MAT: string;
  @Column()
  ID_DISTRITO: string;
  @Column()
  DIRECCION: string;
  @Column()
  FECHA_NAC: Date;
  @Column()
  TELEFONO: string;
  @Column()
  TELEFONO_ADICIONAL: string;
  @Column()
  CORREO: string;
  @Column()
  FECHA_CREACION: Date;
  @Column()
  FECHA_ACTUALIZACION: Date;

  @BeforeInsert()
  insertDates() {
    this.FECHA_CREACION = new Date();
    this.CORREO = this.CORREO.toUpperCase();
    this.DIRECCION = this.DIRECCION.toUpperCase();
  }

  @BeforeUpdate()
  updateDates() {
    this.FECHA_ACTUALIZACION = new Date();
  }
  @OneToMany(
    () => TrabajadorIpressEntity,
    (trabajadores) => trabajadores.persona,
  )
  trabajadores: TrabajadorIpressEntity[];
  @OneToMany(() => HistoriaClinicaEntity, (DATA) => DATA.PERSONA)
  @JoinColumn({ name: 'ID_PERSONA' })
  HISTORIAS: HistoriaClinica[];

  @ManyToOne(() => DistritosEntity, (DATA) => DATA.PERSONAS)
  @JoinColumn({ name: 'ID_DISTRITO' })
  DISTRITO: DistritosEntity;
}
