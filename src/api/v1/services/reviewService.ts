import { Review } from "../models/review";

let reviews: Review[] = [];

// Get all reviews
export const getReviews = () => reviews;

// Get review by ID
export const getReviewById = (id: string) => {
  return reviews.find(review => review.id === id);
};

// Add review
export const addReview = (review: Review) => {
  reviews.push(review);
  return review;
};

// Update review
export const updateReview = (id: string, updatedReview: Review) => {
  const index = reviews.findIndex(review => review.id === id);
  if (index === -1) return null;

  reviews[index] = updatedReview;
  return reviews[index];
};

// Delete review
export const deleteReview = (id: string) => {
  const index = reviews.findIndex(review => review.id === id);
  if (index === -1) return null;

  return reviews.splice(index, 1)[0];
};

// Get reviews by carId (important for your project)
export const getReviewsByCarId = (carId: string) => {
  return reviews.filter(review => review.carId === carId);
};