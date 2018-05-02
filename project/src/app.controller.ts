import { Get, Controller } from '@nestjs/common';
const fs = require('fs');
let contador = 0;

@Controller()
export class AppController {

  @Get()
  root() {
    console.log('Entro al Metodo');

    contador ++;
    let html = fs.readFileSync(__dirname + '/html/index.html', 'utf8');
    html = html.replace('{{variable}}', contador);
    //console.log('Termino el Metodo');
    return html;
  }
}
