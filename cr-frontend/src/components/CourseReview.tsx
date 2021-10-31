import React, { useEffect, useState } from "react";
import CourseItem from "./CourseItem";
import { Course } from "../interfaces";
import NewCourseForm from ".//NewCourseForm";
import CoursesService from "../services/CoursesService";

const CourseReview = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [formVisible, setFormVisible] = useState<boolean>(false);

  const toggleFormVisible = () => {
    setFormVisible(!formVisible);
  };

  const fetchCourses = () => {
    CoursesService.fetchCourses().then((courses) => {
      setCourses(courses);
    });
  };

  const handleNewCourseCreated = (course: Course) => {
    fetchCourses();
    setFormVisible(false);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="CourseReview">
      <ul>
        {courses.map((item) => (
          <CourseItem key={item.id} course={item} />
        ))}
      </ul>
      <button onClick={toggleFormVisible}>New course</button>
      {formVisible && (
        <NewCourseForm onNewCourseCreated={handleNewCourseCreated} />
      )}
    </div>
  );
};

export default CourseReview;
