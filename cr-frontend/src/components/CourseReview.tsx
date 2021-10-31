import React, { useEffect, useState } from "react";
import CourseItem from "./CourseItem";
import { Course } from "../interfaces";
import NewCourseForm from ".//NewCourseForm";
import CoursesService from "../services/CoursesService";
import AuthService from "../services/AuthService";
import { Redirect } from "react-router";

const CourseReview = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [formVisible, setFormVisible] = useState<boolean>(false);
  const [isUserLoginedIn, setIsUserLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    setIsUserLoggedIn(AuthService.isUserLoggedIn());
  }, []);

  const toggleFormVisible = () => {
    setIsUserLoggedIn(AuthService.isUserLoggedIn());
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
      {formVisible && isUserLoginedIn && (
        <NewCourseForm onNewCourseCreated={handleNewCourseCreated} />
      )}
      {formVisible && !isUserLoginedIn && <Redirect to="/login" />}
    </div>
  );
};

export default CourseReview;
