import {Module} from "@nestjs/common";
import {UsuarioEntity} from "./usuario.entity";
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([UsuarioEntity])],
})
export class UsuarioModuleModule {}