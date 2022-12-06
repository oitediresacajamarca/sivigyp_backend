import { Body, Controller, Get, Post } from '@nestjs/common';
import axios from 'axios'

@Controller('helpers')
export class HelpersController {

    @Post('user')
    async user   (@Body()    body: any) {


        const resp = await axios.get('http://172.18.20.30:8050/api/user', { headers: { 'Authorization': 'Bearer ' + body.token } })
            .then(data => { ; return data }).catch(error=>{; return error})
        return resp

    }
}
