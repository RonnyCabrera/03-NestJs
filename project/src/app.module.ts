import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {AppPeliculaController} from "./app.pelicula-controller";
import {ParametrosController} from "./parametros.controller";

@Module({
  imports: [], //importar otros modulos
  controllers: [AppController, AppPeliculaController, ParametrosController],
  components: [],
})
export class AppModule {}
