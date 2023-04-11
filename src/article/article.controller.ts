import { NewsService } from './../news/news.service';
import { Controller, Get } from '@nestjs/common';

@Controller('article')
export class ArticleController {
  constructor(private newsService: NewsService) {}
  @Get()
  index() {
    return this.newsService.findAll();
  }
}
