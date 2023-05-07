import { Controller, Get, Post, Delete, Put } from '@nestjs/common';

@Controller()
export class AppController {
  
  @Post()
  setCounter() {
    console.log('Post')
  }

  @Get()
  getCounter() {
    console.log('Get')
  }

  @Put()
  updateCounter() {
    console.log('Put')
  }

  @Delete()
  deleteCounter() {
    console.log('Delete')
  }
}
