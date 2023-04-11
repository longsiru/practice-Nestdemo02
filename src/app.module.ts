import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { NewsService } from './news/news.service';
import { NewsController } from './news/news.controller';
import { ArticleController } from './article/article.controller';
import { UploadController } from './upload/upload.controller';
import { UploadmanyController } from './uploadmany/uploadmany.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    UserController,
    NewsController,
    ArticleController,
    UploadController,
    UploadmanyController,
  ],
  providers: [AppService, NewsService],
})
export class AppModule {}
