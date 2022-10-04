import { Column, ViewEntity } from 'typeorm';

@ViewEntity('PADRON_GESTANTE')
export class PadronGestanteHisEntity {
  @Column()
  RED: string;
  @Column()
  MICRORED: string;
  @Column()
  RENIPRESS: string;
  @Column()
  IPRESS: string;
  @Column()
  FECHA_ATENCION: Date;
  @Column()
  NUMERO_DOCUMENTO: string;
  @Column()
  APELLIDO_PATERNO: string;
  @Column()
  APELLIDO_MATERNO: string;
  @Column()
  NOMBRES: string;
}
