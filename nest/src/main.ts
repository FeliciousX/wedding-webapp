import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as cookieParser from 'cookie-parser';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.setViewEngine('hbs');
  app.setBaseViewsDir(join(__dirname, '../', 'views'));
  app.useStaticAssets(join(__dirname, '../', 'public'), {
    prefix: '/public',
  });

  app.use(cookieParser());

  const port = process.env.PORT ?? 3000
  await app.listen(port);

  console.log(`[INFO] Server is running on port ${port}`);
}
bootstrap();
