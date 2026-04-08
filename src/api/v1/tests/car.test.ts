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
  

  test("should find car by id", () => {
    // Arrange
    const car = {
        id: "2",
        brand: "Honda",
        model: "Civic",
        pricePerDay: 40
    };
    addCar(car);

    // Act
    const result = getCars().find(c => c.id === "2");

    // Assert
    expect(result).toEqual(car);
    });

});