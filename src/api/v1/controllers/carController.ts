import { Request, Response } from "express";
import * as carService from "../services/carService";

export const getCars = (req: Request, res: Response) => {
  res.json(carService.getCars());
};

export const addCar = (req: Request, res: Response) => {
  const car = carService.addCar(req.body);
  res.json(car);
};