import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CondicionLaboralEntity } from './condicion-laboral.entity';
import { PersonaEntity } from './persona.entity';
import { ProfesionEntity } from './profesion.entity';

@Entity('TRABAJADOR_IPRESS')
export class TrabajadorIpressEntity {
  @PrimaryGeneratedColumn()
  ID_TRABAJADOR_IPRESS: number;
  @Column()
  ID_PERSONA: number;
  @Column()
  ID_PROFESION: number;
  @Column()
  ID_CONDICION_LABORAL: number;
  @Column()
  ID_IPRESS: string;
  @Column()
  DESCRIPCION: string;
  @Column()
  FEC_INGRESO: Date;
  @Column()
  ESTADO: boolean;
  @ManyToOne(() => PersonaEntity, (persona) => persona.trabajadores)
  @JoinColumn({ name: 'ID_PERSONA' })
  persona: PersonaEntity;
  @ManyToOne(() => ProfesionEntity, (profesion) => profesion.TRABAJADORES)
  @JoinColumn({ name: 'ID_PROFESION' })
  profesion: ProfesionEntity;
  @ManyToOne(
    () => CondicionLaboralEntity,
    (profesion) => profesion.trabajadores,
  )
  @JoinColumn({ name: 'ID_CONDICION_LABORAL' })
  codicion_laboral: CondicionLaboralEntity;
}
