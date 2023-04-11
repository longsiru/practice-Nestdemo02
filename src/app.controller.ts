import { Controller, Get, Render, Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //4.模版引擎和get
  // @Get()
  // @Render('default/index')
  // getHello() {
  //   return { name: 'sayo', age: 20 };
  // }

  //5.模版引擎结合post--》新建一个控制器。

  //session
  @Get()
  @Render('default/index') //一开始一直没有出来，原因是render了同一个html
  index(@Request() req): string {
    //setting session's value
    req.session.username = 'sansan';
    return '';
  }

  @Get('user')
  userIndex(@Request() req): string {
    //get session's value
    console.log(req.session.username);
    return req.session.username;
  }
}
