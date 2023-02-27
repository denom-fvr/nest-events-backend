/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('/events') 
export class EventsController {
  @Get()
  findAll() { }
  @Get(':id')
  findOne(@Param('id') id) { 
    return id;
  }
  @Post()
  create(): void { }
  @Patch(':id')
  update(@Param('id') id) { }
  @Delete(':id')
  remove(@Param('id') id) { }
}

