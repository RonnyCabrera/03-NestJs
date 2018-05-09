import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {AppPeliculaController} from "./app.pelicula-controller";
import {ParametrosController} from "./parametros.controller";
import {UsuarioService} from "./usuario.service";

@Module({
  imports: [], //importar otros modulos
  controllers: [AppController, AppPeliculaController, ParametrosController],
  components: [UsuarioService],
})
export class AppModule {}
