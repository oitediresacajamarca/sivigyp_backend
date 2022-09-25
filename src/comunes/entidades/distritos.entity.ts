import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { PersonaEntity } from './persona.entity';
import { ProvinciasEntity } from './provincias.entity';

@Entity('DISTRITO')
export class DistritosEntity {
  @PrimaryColumn()
  ID_DISTRITO: string;
  @Column()
  ID_PROVINCIA: string;
  @Column()
  NOMBRE: string;
  @ManyToOne(() => ProvinciasEntity, (data) => data.DISTRITOS)
  @JoinColumn({ name: 'ID_PROVINCIA' })
  PROVINCIA: ProvinciasEntity;
  @ManyToOne(() => PersonaEntity, (data) => data.DISTRITO)
  @JoinColumn({ name: 'ID_DISTRITO' })
  PERSONAS: PersonaEntity;
}
