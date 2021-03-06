import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesService } from './courses.service';

import Course from './course.entity';
import Review from './review.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Course, Review])],
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule {}
