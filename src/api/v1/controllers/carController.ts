import { Request, Response } from "express";
import * as carService from "../services/carService";

// Get all cars (with filtering)
export const getCars = (req: Request, res: Response) => {
  const cars = carService.getCars(req.query as any);
  res.json(cars);
};

// Get car by ID
export const getCarById = (req: Request<{ id: string }>, res: Response) => {
  const car = carService.getCarById(req.params.id);
  if (!car) return res.status(404).json({ message: "Car not found" });

  res.json(car);
};

// Add car
export const addCar = (req: Request, res: Response) => {
  const car = carService.addCar(req.body);
  res.status(201).json(car);
};

// Update car
export const updateCar = (req: Request<{ id: string }>, res: Response) => {
  const car = carService.updateCar(req.params.id, req.body);
  if (!car) return res.status(404).json({ message: "Car not found" });

  res.json(car);
};

// Delete car
export const deleteCar = (req: Request<{ id: string }>, res: Response) => {
  const car = carService.deleteCar(req.params.id);
  if (!car) return res.status(404).json({ message: "Car not found" });

  res.json({ message: "Car deleted successfully" });
};