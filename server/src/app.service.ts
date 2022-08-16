import { Injectable, PipeTransform } from '@nestjs/common';
import * as path from 'path';
import * as sharp from 'sharp';
import { GenerateRandomString } from './helpers/generateRandomeString';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

@Injectable()
export class SharpPipeForLocation
  implements PipeTransform<Express.Multer.File, Promise<string>>
{
  async transform(image: Express.Multer.File): Promise<string> {
    const randomName = Date.now() + '_' + GenerateRandomString(16);

    await sharp(image.buffer)
      .resize({
        width: 260,
        height: 147,
        fit: sharp.fit.cover,
        position: sharp.strategy.entropy,
      })
      .webp({ effort: 3 })
      .toFile(path.join('./uploads/images', randomName + 'm' + '.webp'));

    await sharp(image.buffer)
      .resize({
        width: 560,
        height: 315,
        fit: sharp.fit.cover,
        position: sharp.strategy.entropy,
      })
      .webp({ effort: 3 })
      .toFile(path.join('./uploads/images', randomName + 'l' + '.webp'));

    return randomName;
  }
}

@Injectable()
export class SharpPipeForPost
  implements PipeTransform<Express.Multer.File, Promise<string>>
{
  async transform(image: Express.Multer.File): Promise<string> {
    const randomName = Date.now() + '_' + GenerateRandomString(16);

    await sharp(image.buffer)
      .resize({
        width: 300,
        height: 169,
        fit: sharp.fit.cover,
        position: sharp.strategy.entropy,
      })
      .webp({ effort: 3 })
      .toFile(path.join('./uploads/images', randomName + 'm' + '.webp'));

    await sharp(image.buffer)
      .resize({
        width: 750,
        height: 422,
        fit: sharp.fit.cover,
        position: sharp.strategy.entropy,
      })
      .webp({ effort: 3 })
      .toFile(path.join('./uploads/images', randomName + 'l' + '.webp'));

    return randomName;
  }
}
