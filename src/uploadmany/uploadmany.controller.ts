import {
  Controller,
  Get,
  Render,
  Post,
  Body,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';

import {
  AnyFilesInterceptor,
  FilesInterceptor,
} from '@nestjs/platform-express';

import { createWriteStream } from 'fs';

import { join } from 'path';

//文档：https://docs.nestjs.com/techniques/file-upload

@Controller('uploadmany')
export class UploadmanyController {
  @Get()
  @Render('default/uploadmany')
  index() {}

  @Post('doAdd')
  @UseInterceptors(FilesInterceptor('pic')) //图片名字都一样时
  //@UseInterceptors(AnyFilesInterceptor()) //图片名字都不一样时
  doAdd(@Body() body, @UploadedFiles() files) {
    //如果要实现图片上传的话还需要进行一些判断
    console.log(body);
    console.log(files); //有多张图片时要用 for循环放入本地
    for (const file of files) {
      const writeImage = createWriteStream(
        join(
          __dirname,
          '../../',
          'public/upload',
          `${Date.now()}-${file.originalname}`,
        ),
      );
      writeImage.write(file.buffer);
    }
    return '上传图片成功';
  }
}
