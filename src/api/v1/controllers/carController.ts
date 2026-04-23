import { Request, Response } from "express";
import * as carService from "../services/carService";
import { carSchema } from "../validations/carValidation";

// GET ALL CARS WITH FILTERRING
export const getCars = (req: Request, res: Response) => {
  const { brand } = req.query;

  let cars = carService.getCars();

  // filtering feature
  if (brand) {
    cars = cars.filter(c => c.brand === brand);
  }

  res.json(cars);
};

// GET CAR BY ID
export const getCarById = (req: Request<{ id: string }>, res: Response) => {
  const car = carService.getCarById(req.params.id);

  if (!car) {
    return res.status(404).json({ message: "Car not found" });
  }

  res.json(car);
};

// ADD CAR 
export const addCar = (req: Request, res: Response) => {
  const { error } = carSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  const car = carService.addCar(req.body);
  res.status(201).json(car);
};

// UPDATE CAR 
export const updateCar = (req: Request<{ id: string }>, res: Response) => {
  const { error } = carSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  const car = carService.updateCar(req.params.id, req.body);

  if (!car) {
    return res.status(404).json({ message: "Car not found" });
  }

  res.json(car);
};

// DELETE CAR
export const deleteCar = (req: Request<{ id: string }>, res: Response) => {
  const car = carService.deleteCar(req.params.id);

  if (!car) {
    return res.status(404).json({ message: "Car not found" });
  }

  res.json({ message: "Car deleted successfully" });
};