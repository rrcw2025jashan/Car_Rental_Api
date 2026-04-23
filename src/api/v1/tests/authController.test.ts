import { login } from "../controllers/authController";
import { Request, Response } from "express";

describe("Auth Controller", () => {

  test("should return 400 if email is missing", () => {
    const req = {
      body: {}
    } as Request;

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    } as unknown as Response;

    login(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
  });

  test("should return token if email is provided", () => {
    const req = {
      body: { email: "test@test.com" }
    } as Request;

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    } as unknown as Response;

    login(req, res);

    expect(res.json).toHaveBeenCalled();
  });

});