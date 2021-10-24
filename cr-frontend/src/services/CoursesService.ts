import { Course } from "../interfaces";
import { baseUrl } from "../config/const";

async function fetchCourses(): Promise<Course[]> {
  const res = await fetch(`${baseUrl}/courses`);
  const courses = await res.json();
  return courses;
}

async function createCourse(newCourse: Course): Promise<Course | null> {
  const res = await fetch(`${baseUrl}/courses`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newCourse),
  });
  const savedNewCourse = await res.json();
  if (savedNewCourse.id !== undefined) {
    return savedNewCourse;
  } else {
    return null;
  }
}

const logger = {
  fetchCourses,
  createCourse,
};

export default logger;
