import express from "express";
import carRoutes from "../src/api/v1/routes/carRoutes";
import bookingRoutes from "../src/api/v1/routes/bookingRoutes";
import { limiter } from "./api/v1/middlewares/rateLimiter";

const app = express();
app.use(express.json());
app.use(limiter);

app.use("/cars", carRoutes);
app.use("/bookings", bookingRoutes);

app.get("/", (req, res) => {
  res.send("Car Rental API Running");
});

export default app;