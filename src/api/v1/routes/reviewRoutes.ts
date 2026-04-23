import { Router } from "express";
import * as reviewController from "../controllers/reviewController";

const router = Router();

router.get("/", reviewController.getReviews);
router.post("/", reviewController.addReview);
router.put("/:id", reviewController.updateReview);
router.delete("/:id", reviewController.deleteReview);

// extra route for your project
router.get("/car/:carId", reviewController.getReviewsByCarId);

export default router;