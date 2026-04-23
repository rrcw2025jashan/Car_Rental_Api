import { Request, Response } from "express";
import * as carService from "../services/carService";

export const getCars = (req: Request, res: Response) => {
  res.json(carService.getCars());
};

export const getCarById = (req: Request<{ id: string }>, res: Response) => {
  const car = carService.getCarById(req.params.id);
  if (!car) return res.status(404).json({ message: "Car not found" });

  res.json(car);
};

export const addCar = (req: Request, res: Response) => {
  const car = carService.addCar(req.body);
  res.status(201).json(car);
};

export const updateCar = (req: Request<{ id: string }>, res: Response) => {
  const car = carService.updateCar(req.params.id, req.body);
  if (!car) return res.status(404).json({ message: "Car not found" });

  res.json(car);
};

export const deleteCar = (req: Request<{ id: string }>, res: Response) => {
  const car = carService.deleteCar(req.params.id);
  if (!car) return res.status(404).json({ message: "Car not found" });

  res.json({ message: "Car deleted successfully" });
};