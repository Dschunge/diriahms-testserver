import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.SERVER_PORT || 3100
  console.log(`Server running on Port: ${port}`)
  await app.listen(port);
}
bootstrap();
