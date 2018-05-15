import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {AppPeliculaController} from "./app.pelicula-controller";
import {ParametrosController} from "./parametros.controller";
import {UsuarioService} from "./usuario.service";
import {UsuarioController} from "./usuario.controller";
import { TypeOrmModule } from '@nestjs/typeorm';
import {UsuarioEntity} from "./usuario/usuario.entity";

@Module({
  imports: [
      TypeOrmModule.forRoot({
          type: 'mysql',
          host: '172.31.104.77',
          port: 3306,
          username: 'root',
          password: 'root',
          database: 'web',
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          synchronize: true,
      }),
      TypeOrmModule.forFeature([UsuarioEntity])], //importar otros modulos
  controllers: [AppController, AppPeliculaController, ParametrosController, UsuarioController],
  components: [UsuarioService],
})
export class AppModule {}
