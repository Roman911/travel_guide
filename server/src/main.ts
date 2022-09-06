import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT } from './config';

import * as bodyParser from 'body-parser';

const start = async () => {
  try {
    const app = await NestFactory.create(AppModule, { cors: true });

    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

    await app.listen(PORT || 5000, () =>
      console.log(`server started on PORT ${PORT}`),
    );
  } catch (e) {
    console.log(e);
  }
};

start();
