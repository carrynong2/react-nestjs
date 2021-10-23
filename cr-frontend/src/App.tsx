import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [courses, setCourses] = useState<any[]>([]);

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
          <li key={item.id}>
            {item.number} - {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
