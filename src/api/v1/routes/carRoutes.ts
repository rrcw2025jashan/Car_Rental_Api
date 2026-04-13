import { Router } from "express";
import * as carController from "../controllers/carController";

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
 *     summary: Add a new car
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
router.post("/", carController.addCar);

/**
 * @swagger
 * /cars/{id}:
 *   put:
 *     summary: Update a car
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
router.put("/:id", carController.updateCar);

/**
 * @swagger
 * /cars/{id}:
 *   delete:
 *     summary: Delete a car
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
router.delete("/:id", carController.deleteCar);

export default router;