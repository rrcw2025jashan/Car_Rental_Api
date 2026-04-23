import { Router } from "express";
import * as carController from "../controllers/carController";
import { verifyToken } from "../middlewares/authMiddleware";

const router = Router();

/**
 * @swagger
 * /cars:
 *   get:
 *     summary: Get all cars
 *     responses:
 *       200:
 *         description: List of cars
 */
router.get("/", carController.getCars);

/**
 * @swagger
 * /cars:
 *   post:
 *     summary: Add a new car (Protected)
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               brand:
 *                 type: string
 *               model:
 *                 type: string
 *               pricePerDay:
 *                 type: number
 *     responses:
 *       201:
 *         description: Car created
 */
router.post("/", verifyToken, carController.addCar);

/**
 * @swagger
 * /cars/{id}:
 *   put:
 *     summary: Update a car (Protected)
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Car updated
 */
router.put("/:id", verifyToken, carController.updateCar);

/**
 * @swagger
 * /cars/{id}:
 *   delete:
 *     summary: Delete a car (Protected)
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Car deleted
 */
router.delete("/:id", verifyToken, carController.deleteCar);

export default router;