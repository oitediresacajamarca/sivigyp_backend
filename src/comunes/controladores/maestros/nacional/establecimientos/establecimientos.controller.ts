import { Controller, Get, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EstablecimientosNacEntity } from 'src/comunes/entidades/establecimientos_nac.entity/establecimientos_nac.entity';
import { Like, Repository } from 'typeorm';

@Controller('establecimientos_nac')
export class EstablecimientosController {
    constructor( @InjectRepository(EstablecimientosNacEntity, 'db_svgyp')
    private est_rep: Repository<EstablecimientosNacEntity>){}

    @Get('departamentos')
    async listar_departamentos(){
        console.log('hello')
      const resp= await this.est_rep.createQueryBuilder('establecimientos_nacional_view').select(['establecimientos_nacional_view.Departamento as DEPARTAMENTO','establecimientos_nacional_view.COD_DEP AS COD_DEP'])

      .distinct(true).getRawMany()
      return resp
    }
    @Get('provincias/:cod_departamento')
    async listar_provincias(@Param('cod_departamento') cod_departamento:string){
        console.log('hello')
      const resp= await this.est_rep.createQueryBuilder('establecimientos_nacional_view').select(['establecimientos_nacional_view.Provincia as Provincia','establecimientos_nacional_view.COD_PROV AS COD_PROV'])
      .where('establecimientos_nacional_view.COD_DEP like :cod_departamento',{cod_departamento:cod_departamento+'%'})

      .distinct(true).getRawMany()
      return resp
    }
    @Get('distritos/:cod_provincia')
    async listar_distritos(@Param('cod_provincia') cod_provincia:string){
        console.log('hello')
      const resp= await this.est_rep.createQueryBuilder('establecimientos_nacional_view').select(['establecimientos_nacional_view.Distrito as Distrito','establecimientos_nacional_view.COD_DIST AS COD_DIST'])
      .where('establecimientos_nacional_view.COD_DIST like :cod_departamento',{cod_departamento:cod_provincia+'%'})

      .distinct(true).getRawMany()
      return resp
    }
    @Get('establecimiento/:cod_distrito')
    async listar_establecimiento(@Param('cod_distrito') cod_distrito:string){
        console.log('hello')
      const resp= await this.est_rep.createQueryBuilder('establecimientos_nacional_view').select(['establecimientos_nacional_view.Nombre_del_establecimiento as establecimiento','establecimientos_nacional_view.Codigo_Unico AS Codigo_Unico'])
      .where('establecimientos_nacional_view.COD_DIST like :cod_distrito',{cod_distrito:cod_distrito+'%'})

      .distinct(true).getRawMany()
      return resp
    }


    @Get(':busqueda')
    private async listar(@Param('busqueda') busqueda:string) {
        console.log(busqueda)
         const condicion='%'+busqueda+'%'
        const resp= await this.est_rep.find({where:[{Departamento:Like(condicion)},{Provincia:Like(condicion)}
        ,{Distrito:Like(condicion)},{Codigo_Unico:Like(condicion)},
        {Nombre_del_establecimiento:Like(condicion)}]})
        return resp        
    }
  
}
