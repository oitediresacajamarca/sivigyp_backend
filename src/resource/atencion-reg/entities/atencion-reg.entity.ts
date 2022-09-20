import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ATENCION_REG')
export class AtencionReg {
  @PrimaryGeneratedColumn()
  ID_ATENCION_REG?: number;
  @Column()
  ID_ATENCION: number;
  @Column()
  FECHA_ATENCION_REG: Date;
  @Column()
  EDAD_GESTACIONAL: number;
  @Column()
  ESTADO_ATENCION: number;
  @Column()
  USU: string;
  @Column()
  ESTADO_CERRADO: number;
}
