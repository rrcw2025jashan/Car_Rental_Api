import { getCars, addCar } from "../services/carService";

describe("Car Service", () => {

  test("should return empty cars initially", () => {
    // Arrange
    const expected: any[] = [];
    // Act
    const result = getCars();
    // Assert
    expect(result).toEqual(expected);
  });

  test("should add a car", () => {
    // Arrange
    const car = {
      id: "1",
      brand: "Toyota",
      model: "Camry",
      pricePerDay: 50
    };
    // Act
    const result = addCar(car);

    // Assert
    expect(result).toEqual(car);
    expect(getCars().length).toBe(1);
  });

});