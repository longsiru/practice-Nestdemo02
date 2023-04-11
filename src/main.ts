import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//配置静态资源，expresss
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

//4.如果我们要实现多个页面之间共享数据的话我们就可以使用 Cookie 或者 Session 实现.
//cookie是存储于访问者计算机中的变量，可以让我们用同一个浏览器访问同一个域名的时候共享数据。
//使用cookie：4.1.安装：npm insatall cookie-parser --save
//4.2.import cooki-parser：import * as cookieParser from 'cookie-parser';
//4.3.配置cookie中间件
import * as cookieParser from 'cookie-parser';

//5.session是另一种记录客户状态的机制。
//5.1.安装session： npm install express-session --save
//5.2. import session
import * as session from 'express-session';

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

  //4.3.配置cookie中间件
  //4.6 对cookie进行加密。---配置中间件的时候需要传参数，任意。，然后设置的时候：signed：true
  app.use(cookieParser('this is signedCookie'));

  //5.3.配置session中间件 //加了rolling之后，么哦一次都重新加载过期的cookie时间。
  app.use(
    session({
      secret: 'keyboard cat',
      cookie: { maxAge: 9000, httpOnly: true },
      rolling: true,
    }),
  );

  await app.listen(3000);
}
bootstrap();
