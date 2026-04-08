import { Router } from "express";
import * as carController from "../controllers/carController";

const router = Router();

router.get("/", carController.getCars);
router.post("/", carController.addCar);
router.put("/:id", carController.updateCar);
router.delete("/:id", carController.deleteCar);

export default router;