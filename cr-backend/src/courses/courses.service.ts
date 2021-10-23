import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Course from './course.entity';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course) private coursesRepository: Repository<Course>,
  ) {}
  async findAll(): Promise<Course[]> {
    return this.coursesRepository.find();
  }
}
