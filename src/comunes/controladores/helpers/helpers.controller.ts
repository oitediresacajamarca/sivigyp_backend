import { Controller, Get } from '@nestjs/common';
import axios from 'axios'

@Controller('helpers')
export class HelpersController {

    @Get('user')
    async user(token: string) {

        const resp = await axios.get('http://172.18.20.30:8050/api/user', { headers: { 'Authorization': 'Bearer ' + token } })
            .then(data => { console.log(data); return data })
        return resp

    }
}
