import { Router } from "express";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Reviews
 *   description: Review management
 */

/**
 * @swagger
 * /reviews:
 *   get:
 *     summary: Get all reviews
 *     tags: [Reviews]
 *     responses:
 *       200:
 *         description: List of reviews
 */
router.get("/", (req, res) => {
  res.json([]);
});

/**
 * @swagger
 * /reviews:
 *   post:
 *     summary: Create a review
 *     tags: [Reviews]
 *     responses:
 *       201:
 *         description: Review created
 */
router.post("/", (req, res) => {
  res.status(201).json(req.body);
});

export default router;