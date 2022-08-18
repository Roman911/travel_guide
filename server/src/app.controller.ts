import {
  Controller,
  Get,
  UseInterceptors,
  Post,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';
import { SharpPipeForLocation, SharpPipeForPost } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  uploadFile(@UploadedFile(SharpPipeForPost) image: string) {
    return { image };
  }

  @Post('/create-post')
  @UseInterceptors(FileInterceptor('image'))
  uploadImage(@UploadedFile(SharpPipeForPost) image: string) {
    return image;
  }
}
