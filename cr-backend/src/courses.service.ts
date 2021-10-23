import { Injectable } from '@nestjs/common';
import { Course } from './interfaces/couse.interface';

@Injectable()
export class CoursesService {
  async findAll(): Promise<Course[]> {
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
