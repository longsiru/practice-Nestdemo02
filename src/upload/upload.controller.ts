import {
  Controller,
  Get,
  Render,
  Post,
  Body,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';

//多图用FilesInterceptor
import { FileInterceptor } from '@nestjs/platform-express';

import { createWriteStream } from 'fs';

import { join } from 'path';

@Controller('upload')
export class UploadController {
  @Get()
  @Render('default/upload')
  index() {}

  @Post('doAdd')
  @UseInterceptors(FileInterceptor('pic'))
  doAdd(@Body() body, @UploadedFile() file) {
    console.log(body);
    console.log(file); //上传的图片信息 必须在form的属性里面配置enctype="multipart/form-data"

    console.log(__dirname);
    var writeStream = createWriteStream(
      join(
        __dirname,
        '../../public/upload',
        `${Date.now()}-${file.originalname}`,
      ),
    );

    writeStream.write(file.buffer);

    return 'success for upload picture';
  }
}
