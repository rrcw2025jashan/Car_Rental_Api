import { Request, Response } from "express";
import * as bookingService from "../services/bookingService";

export const getBookings = (req: Request, res: Response) => {
  res.json(bookingService.getBookings());
};

export const addBooking = (req: Request, res: Response) => {
  res.json(bookingService.addBooking(req.body));
};