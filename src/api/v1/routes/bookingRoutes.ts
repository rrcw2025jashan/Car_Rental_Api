import { Router } from "express";
import * as bookingController from "../controllers/bookingController";

const router = Router();

router.get("/", bookingController.getBookings);
router.post("/", bookingController.addBooking);
export default router;