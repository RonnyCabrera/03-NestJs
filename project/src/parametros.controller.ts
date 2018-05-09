import {Body, Controller, Post, Query} from "@nestjs/common";
import {Param, Req, Res} from "@nestjs/common/utils/decorators/route-params.decorator";

@Controller('Parametros')
export class ParametrosController {
    @Post('recuperar/:id')
    recuperarParametros(@Req() request, @Res() responde, @Param() paramParams, @Query() queryParams, @Body() bodyParams) {
        const respuesta = {
            paramParams:paramParams,
            queryParams:queryParams,
            bodyParams:bodyParams
        };
        console.log(respuesta);
        return responde.send(respuesta)

    }
}