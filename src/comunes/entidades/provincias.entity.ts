import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('PROVINCIA')
export class ProvinciasEntity {
  @PrimaryColumn()
  ID_PROVINCIA: string;
  @Column()
  NOMBRE: string;
}
