import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

@Module({
  imports: [], //importar otros modulos
  controllers: [AppController],
  components: [],
})
export class AppModule {}
