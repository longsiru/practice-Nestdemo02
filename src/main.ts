import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//配置静态资源，expresss
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  //app.useStaticAssets('public'); //1.配置静态资源目录

  //app.useStaticAssets('public', { prefix: '/static/' }); //配置虚拟目录//http://localhost:3000/static/base.css

  //用到了path模块。和上面的是一样的。
  app.useStaticAssets(join(__dirname, '..', 'public'), {
    prefix: '/static/', //2.设置虚拟路径
  });

  //3.配置模版引擎
  //注意首先必须安装模版引擎 npm i ejs --save
  //除了ejs模版引擎还有其他的模版引擎，可以安装自己喜欢用的。
  app.setBaseViewsDir(join(__dirname, '..', 'views')); // 放视图的文件
  app.setViewEngine('ejs');

  await app.listen(3000);
}
bootstrap();
