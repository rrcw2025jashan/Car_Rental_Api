import express from "express";
import carRoutes from "../src/api/v1/routes/carRoutes";
import bookingRoutes from "../src/api/v1/routes/bookingRoutes";
import { limiter } from "./api/v1/middlewares/rateLimiter";

const app = express();

app.use(express.json());
app.use(limiter);

// apply limiter to API routes 
app.use("/cars", limiter);
app.use("/bookings", limiter);

// routes
app.use("/cars", carRoutes);
app.use("/bookings", bookingRoutes);
app.use("/auth", authRoutes);
// swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req, res) => {
  res.send("Car Rental API Running");
});

export default app;