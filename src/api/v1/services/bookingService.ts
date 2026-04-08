import { Booking } from "../models/booking";

let bookings: Booking[] = [];

export const getBookings = () => bookings;

export const addBooking = (booking: Booking) => {
  bookings.push(booking);
  return booking;
};