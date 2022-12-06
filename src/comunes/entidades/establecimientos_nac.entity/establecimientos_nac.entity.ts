import { Column, ViewEntity } from "typeorm";

@ViewEntity('establecimientos_nacional_view')
export class EstablecimientosNacEntity {
    @Column()
    Institucion:                                             string;
    @Column()
    Codigo_Unico:                                            string;
    @Column()
    Nombre_del_establecimiento:                              string;
    @Column()
    Clasificacion:                                           string;
    @Column()
    Tipo:                                                    string;
    @Column()
    Departamento:                                            string;
    @Column()
    Provincia:                                               string;
    @Column()
    Distrito:                                                string;
    @Column()
    UBIGEO:                                                  string;
    @Column()
    Direccion:                                               string;
    @Column()
    Codigo_DISA:                                             string;
    @Column()
    Codigo_Red:                                              string;
    @Column()
    Codigo_Microrred:                                        string;
    @Column()
    DISA:                                                    string;
    @Column()
    Codigo_UE:                                               string;
    @Column()
    Categoria:                                               string;
    @Column()
    Telefono:                                                string;
    @Column()
    Tipo_Doc_Categorizacion:                                 string;
    @Column()
    Nro_Doc_Categorizacion?:                                 string;
    @Column()
    Horario:                                                 string;
    @Column()
    Inicio_de_Actividad:                                     string;
    @Column()
    Director_Medico_y_o_Responsable_de_la_Atencion_de_Salud: string;
    @Column()
    Estado:                                                  string;
    @Column()
    NORTE?:                                                  number;
    @Column()
    ESTE?:                                                   number;
    @Column()
    RUC:                                                     string;
    @Column()
    Red?:                                                    string;
    @Column()
    Microrred?:                                              string;
    @Column()
    Unidad_Ejecutora?:                                       string;

}
