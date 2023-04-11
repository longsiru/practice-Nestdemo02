import { NewsService } from './../news/news.service';
import { Controller, Get, Render, Response } from '@nestjs/common';

@Controller('article')
export class ArticleController {
  constructor(private newsService: NewsService) {}
  @Get()
  @Render('default/article') //4.8渲染html
  index(@Response() res) {
    res.cookie('username', 'i am cookie', {
      maxAge: 5614000, //14秒之后消失。
      httpOnly: true,
      signed: true,
    });
    //4.4 设置cookies，设置后就不能return了。用 res.send()
    //return this.newsService.findAll();
    //res.send('this is artcle page'); //4.5设置完成之后就可以进行获取了。usercontroller里面获取
    return { username: 'aaa' }; //4.9传值到html  <%=username%>
  }
}
