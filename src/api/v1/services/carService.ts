import { Car } from "../models/car";

let cars: Car[] = [];

export const getCars = () => cars;

export const addCar = (car: Car) => {
  cars.push(car);
  return car;
};