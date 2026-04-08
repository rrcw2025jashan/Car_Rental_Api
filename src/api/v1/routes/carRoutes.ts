import { Router } from "express";
import * as carController from "../controllers/carController";

const router = Router();

router.get("/", carController.getCars);
router.post("/", carController.addCar);

export default router;