import { Router } from "express";
import * as bookingController from "../controllers/bookingController";
import { verifyToken } from "../middlewares/authMiddleware";

const router = Router();

/**
 * @swagger
 * /bookings:
 *   get:
 *     summary: Get all bookings
 *     tags:
 *       - Bookings
 *     responses:
 *       200:
 *         description: List of bookings
 */
router.get("/", bookingController.getBookings);

/**
 * @swagger
 * /bookings:
 *   post:
 *     summary: Create a booking (Protected)
 *     tags:
 *       - Bookings
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
 *               carId:
 *                 type: string
 *               user:
 *                 type: string
 *     responses:
 *       201:
 *         description: Booking created
 */
router.post("/", verifyToken, bookingController.addBooking);

export default router;