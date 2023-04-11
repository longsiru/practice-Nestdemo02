import { NewsService } from './news.service';
import { Controller, Render, Get } from '@nestjs/common';

@Controller('news')
export class NewsController {
  constructor(private newsService: NewsService) {} //newsService相当于 NewsService的实例
  @Get()
  @Render('default/news')
  index() {
    //console.log(this.newsService.findAll()); //[ { title: 'new 111' }, { title: 'new 222' }, { title: 'new 333' } ]

    return { newsList: this.newsService.findAll() };
  }
}
