import { Car } from "../models/car";

let cars: Car[] = [];

export const getCars = () => cars;

export const getCarById = (id: string) => {
  return cars.find(car => car.id === id);
};

export const addCar = (car: Car) => {
  cars.push(car);
  return car;
};

export const updateCar = (id: string, updatedCar: Car) => {
  const index = cars.findIndex(car => car.id === id);
  if (index === -1) return null;

  cars[index] = updatedCar;
  return cars[index];
};

export const deleteCar = (id: string) => {
  const index = cars.findIndex(car => car.id === id);
  if (index === -1) return null;

  return cars.splice(index, 1)[0];
};