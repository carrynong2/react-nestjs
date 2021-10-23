import { Controller, Get } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get()
  findAll(): any {
    return [
      {
        id: '100',
        number: '01204111',
        title: 'Computer and Programming',
      },
      {
        id: '2315fsa',
        number: '01204444',
        title: 'Discrete mathematics and linear algebra',
      },
      {
        id: 'fsafsafa',
        number: '0120444411',
        title: 'Design and analysis of algorithms',
      },
    ];
  }
}
