import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import Course from './course.entity';
import Review from './review.entity';
import { ObjectID } from 'mongodb';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { CreateReviewDto } from './dto/create-review.dto';
import { ParseObjectIdPipe } from '../common/pipes';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('courses')
export class CoursesController {
  constructor(private coursesService: CoursesService) {}

  @Get()
  async findAll(): Promise<Course[]> {
    return this.coursesService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto);
  }

  @Get(':courseId/reviews')
  async findAllReviews(
    @Param('courseId', ParseObjectIdPipe) courseId: ObjectID,
  ): Promise<Review[]> {
    return this.coursesService.findAllReviews(courseId);
  }

  @Post(':courseId/reviews')
  async createReview(
    @Param('courseId', ParseObjectIdPipe) courseId: ObjectID,
    @Body() createReviewDto: CreateReviewDto,
  ) {
    createReviewDto.courseId = courseId;
    return this.coursesService.createReview(createReviewDto);
  }
}
