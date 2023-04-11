import { Body, Controller, Get, Post, Render, Response } from '@nestjs/common';

@Controller('user')
export class UserController {
  //5.模版引擎结合post
  //用render渲染模版。
  @Get()
  @Render('default/user')
  index() {
    //return 'user';//不返回任何，或者返回空
  }

  //@Body()  获取post 提交的数据。
  @Post('doAdd')
  doAdd(@Body() body, @Response() res) {
    console.log(body);
    res.redirect('/user'); //路由跳转
    //return 'success'; //成功后跳转到首页。
  }
}
