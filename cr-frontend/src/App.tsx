import React, { useEffect, useState } from "react";
import "./App.css";
import CourseItem from "./CourseItem";
import { Course } from "./interfaces";

const App = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/courses")
      .then((res) => res.json())
      .then((courses) => {
        setCourses(courses);
      });
  }, []);

  return (
    <div className="App">
      <ul>
        {courses.map((item) => (
          <CourseItem key={item.id} course={item} />
        ))}
      </ul>
    </div>
  );
};

export default App;
