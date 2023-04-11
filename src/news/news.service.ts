import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsService {
  //service里面可以封装一些公共的功能，相当于mvc里面的model，一个service可以依赖注入到任何controller里面。
  findAll() {
    return [
      { title: 'news 111' },
      { title: 'news 222' },
      { title: 'news 333' },
    ];
  }
}
