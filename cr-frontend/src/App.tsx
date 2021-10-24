import React, { useEffect, useState } from "react";
import "./App.css";
import CourseItem from "./components/CourseItem";
import { Course } from "./interfaces";
import NewCourseForm from "./components/NewCourseForm";

const App = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [formVisible, setFormVisible] = useState<boolean>(false);

  const toggleFormVisible = () => {
    setFormVisible(!formVisible);
  };

  const fetchCourses = () => {
    fetch("http://localhost:3000/courses")
      .then((res) => res.json())
      .then((courses) => {
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
    <div className="App">
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

export default App;
