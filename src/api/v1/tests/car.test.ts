import { getCars, addCar } from "../services/carService";

describe("Car Service", () => {

  beforeEach(() => {
    // reset cars arary
    getCars().length = 0;
  });

  test("should return empty cars initially", () => {
    const result = getCars();
    expect(result).toEqual([]);
  });

  test("should add a car", () => {
    const car = {
      id: "1",
      brand: "Toyota",
      model: "Camry",
      pricePerDay: 50
    };

    const result = addCar(car);

    expect(result).toEqual(car);
    expect(getCars().length).toBe(1);
  });

  test("should find car by id", () => {
    const car = {
      id: "2",
      brand: "Honda",
      model: "Civic",
      pricePerDay: 40
    };

    addCar(car);

    const result = getCars().find(c => c.id === "2");

    expect(result).toEqual(car);
  });

  test("should return undefined if car not found", () => {
    const result = getCars().find(c => c.id === "999");
    expect(result).toBeUndefined();
  });

});