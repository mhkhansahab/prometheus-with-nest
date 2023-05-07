import { Controller, Get, Post, Delete, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { PromService } from './PromService';

@Controller()
export class AppController {
  constructor(
    // private readonly appService: AppService,
    private readonly promService: PromService
  ) {}

  @Post()
  setCounter() {
    this.promService.getCount().add(1, { describe: 'Post Request' });
  }

  @Get()
  getCounter() {
    this.promService.getCount().add(1, { describe: 'Get Request' });
    return this.promService.getCount();
  }

  @Put()
  updateCounter() {
    this.promService.getCount().add(1, { describe: 'Update Request' });
    return this.promService.getCount();
  }

  @Delete()
  deleteCounter() {
    this.promService.getCount().add(1, { describe: 'Delete Request' });
    return this.promService.getCount();
  }
}
