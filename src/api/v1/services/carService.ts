import { Car } from "../models/car";

let cars: Car[] = [];

// Get all cars (with filtering)
export const getCars = (filters?: any) => {
  let result = cars;

  if (filters?.brand) {
    result = result.filter(car => car.brand === filters.brand);
  }

  if (filters?.price) {
    result = result.filter(car => car.pricePerDay <= Number(filters.price));
  }

  return result;
};

// Get car by ID
export const getCarById = (id: string) => {
  return cars.find(car => car.id === id);
};

// Add car
export const addCar = (car: Car) => {
  cars.push(car);
  return car;
};

// Update car
export const updateCar = (id: string, updatedCar: Car) => {
  const index = cars.findIndex(car => car.id === id);
  if (index === -1) return null;

  cars[index] = updatedCar;
  return cars[index];
};

// Delete car
export const deleteCar = (id: string) => {
  const index = cars.findIndex(car => car.id === id);
  if (index === -1) return null;

  return cars.splice(index, 1)[0];
};