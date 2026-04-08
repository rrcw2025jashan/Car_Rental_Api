import { getCars } from "../services/carService";

test("should return empty cars initially", () => {
  expect(getCars()).toEqual([]);
});