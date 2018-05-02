import {Controller, Get, HttpCode, Param, Post, Res} from "@nestjs/common";
import {Req} from "@nestjs/common/utils/decorators/route-params.decorator";

@Controller('Pelicula')
export class AppPeliculaController {
    peliculas: Pelicula[] = [];

    @Get('mostrarCartelera')
    mostrarCartelera() {
        return this.peliculas;
    }

    @Post('mostrarCartelera/:nombre/:estreno')
    @HttpCode(203)
    anadirACartelera(@Req() req, @Res() res) {
        const parametrosQuery = req.query;
        this.peliculas
            .push(new Pelicula(
                parametrosQuery.nombre,
                parametrosQuery.estreno)
            );
        return res.send(this.peliculas);
    }
}

class Pelicula {
    constructor(public nombre?: string,
                public estreno?: number) {
    }
}