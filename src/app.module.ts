import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PromService } from './PromService';
import { AppController } from './app.controller';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PromService, AppService],
})

export class AppModule {}
