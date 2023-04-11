import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //4.模版引擎和get
  @Get()
  @Render('default/index')
  getHello() {
    return { name: 'sayo', age: 20 };
  }

  //5.模版引擎结合post--》新建一个控制器。
}
