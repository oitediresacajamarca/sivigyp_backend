import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AtencionEntity } from "../atencion.entity";

@Entity('ATENCION_PPFF')
export class AtencionesPpffEntity {
    @PrimaryGeneratedColumn()
    ID_ATENCION_PPFF: number;
    @Column()
    ID_ATENCION: number;
    @Column()
    FECHA_ADMINISTRACION_PPFF: Date;
    @Column()
    TIPO_PPFF: string;
    @Column()
    INDICACIONES: string;
    @Column()
    FECHA_REGISTRO: Date;

    @ManyToOne(() => AtencionEntity, (data) => data.AtencionesPPPFF)
    @JoinColumn({ name: 'ID_ATENCION' })
    ATENCION?: AtencionEntity;



}
