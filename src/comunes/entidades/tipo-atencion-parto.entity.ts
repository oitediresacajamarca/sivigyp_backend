import { AtencionPartoEntity } from 'src/resource/atencion-parto/entities/atencion-parto.entity';
import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from 'typeorm';

@Entity('TIPO_ATENCION_PARTO')
export class TipoAtencionPartoEntity {
  @PrimaryColumn()
  ID_TIPO_ATENCION_PARTO: number;
  @Column()
  NOMBRE_TIPO_ATENCION_PARTO: string;
  @Column()
  ESTADO: string;
  @OneToMany(() => AtencionPartoEntity, (data) => data.TIPO_ATENCION_PARTO)
  @JoinColumn({ name: 'ID_TIPO_ATENCION_PARTO' })
  ATENCIONES_PARTO: AtencionPartoEntity[];
}
