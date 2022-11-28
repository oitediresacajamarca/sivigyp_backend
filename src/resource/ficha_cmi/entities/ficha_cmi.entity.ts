import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('FICHA')
export class FichaCmi {
    @PrimaryGeneratedColumn()
    ID_FICHA:number;
    @Column()
    NOMBRE_FICHA:string;
    @Column()
    DESCRIPCION_FICHA:string;
    @Column()
    FORMULA_FICHA:string;
    @Column()
    RESPONSABLE_FICHA:string;
    @Column()
    FRECUENCIA_MEDICION:string;
    @Column()
    TIPO_INDICADOR:string;
    @Column()
    VIGENCIA:string;
    @Column()
    UNIDAD:string;
    @Column()
    ID_INDICADOR:string;
    @Column()
    OBSERVACIONES_FICHA:string;
    @Column()
    NUMERADOR:string;
    @Column()
    DENOMINADOR:string;
}

