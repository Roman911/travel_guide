import {
  Controller,
  Get,
  UseInterceptors,
  Post,
  UploadedFile,
  Body,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';
import {
  SharpPipeAvatar,
  SharpPipeForLocation,
  SharpPipeForPost,
  SharpTransformImage,
} from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  uploadFile(@UploadedFile(SharpPipeForLocation) image: string) {
    return { image };
  }

  @Post('/create-post')
  @UseInterceptors(FileInterceptor('image'))
  uploadImage(@UploadedFile(SharpPipeForPost) image: string) {
    return { image };
  }

  @Post('/avatar')
  @UseInterceptors(FileInterceptor('image'))
  uploadAvatar(@UploadedFile(SharpPipeAvatar) image: string) {
    return { image };
  }

  @Post('/transormImage')
  @UseInterceptors(FileInterceptor('image'))
  uploadContent(@UploadedFile(SharpTransformImage) image: string) {
    return { image };
  }
}
