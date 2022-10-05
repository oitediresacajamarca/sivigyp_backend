import { AtencionPartoEntity } from 'src/resource/atencion-parto/entities/atencion-parto.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('NACIMIENTOS')
export class Nacimiento {
  @PrimaryGeneratedColumn()
  ID_NACIMIENTO: number;
  @Column()
  VIVO: number;
  @Column()
  GENERO: number;
  @Column()
  PESO: number;
  @Column()
  ID_PARTO: number;
  @ManyToOne(() => AtencionPartoEntity, (data) => data.NACIMIENTOS)
  @JoinColumn({ name: 'ID_PARTO' })
  PARTO: AtencionPartoEntity;
}
