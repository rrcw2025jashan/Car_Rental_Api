import { Request, Response } from "express";
import * as reviewService from "../services/reviewService";

// Get all reviews
export const getReviews = (req: Request, res: Response) => {
  res.json(reviewService.getReviews());
};

// Get review by ID
export const getReviewById = (req: Request<{ id: string }>, res: Response) => {
  const review = reviewService.getReviewById(req.params.id);
  if (!review) return res.status(404).json({ message: "Review not found" });

  res.json(review);
};

// Add review
export const addReview = (req: Request, res: Response) => {
  const review = reviewService.addReview(req.body);
  res.status(201).json(review);
};

// Update review
export const updateReview = (req: Request<{ id: string }>, res: Response) => {
  const review = reviewService.updateReview(req.params.id, req.body);
  if (!review) return res.status(404).json({ message: "Review not found" });

  res.json(review);
};

// Delete review
export const deleteReview = (req: Request<{ id: string }>, res: Response) => {
  const review = reviewService.deleteReview(req.params.id);
  if (!review) return res.status(404).json({ message: "Review not found" });

  res.json({ message: "Review deleted successfully" });
};



export const getReviewsByCarId = (
  req: Request<{ carId: string }>,
  res: Response
) => {
  const reviews = reviewService.getReviewsByCarId(req.params.carId);
  res.json(reviews);
};