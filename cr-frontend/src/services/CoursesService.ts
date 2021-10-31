import { Course, Review } from "../interfaces";
import { baseUrl } from "../config/const";

async function fetchCourses(): Promise<Course[]> {
  const res = await fetch(`${baseUrl}/courses`);
  const courses = await res.json();
  return courses;
}

async function createCourse(
  newCourse: Course,
  accessToken: string
): Promise<Course | null> {
  const res = await fetch(`${baseUrl}/courses`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(newCourse),
  });
  const savedNewCourse = await res.json();
  if (savedNewCourse.id !== undefined) {
    return savedNewCourse;
  } else {
    return null;
  }
}

async function fetchReviews(courseId: string): Promise<Review[]> {
  const res = await fetch(`${baseUrl}/courses/${courseId}/reviews`);
  const reviews = await res.json();
  return reviews;
}

async function createReview(
  newReview: Review,
  courseId: string
): Promise<Review | null> {
  const res = await fetch(`${baseUrl}/courses/${courseId}/reviews`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newReview),
  });
  const savedNewReview: Review = await res.json();
  if (savedNewReview.id !== undefined) {
    return savedNewReview;
  } else {
    return null;
  }
}

const logger = {
  fetchCourses,
  createCourse,
  fetchReviews,
  createReview,
};

export default logger;
