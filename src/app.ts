import express from "express";
import carRoutes from "./api/v1/routes/carRoutes";
import bookingRoutes from "./api/v1/routes/bookingRoutes";
import { limiter } from "./api/v1/middlewares/rateLimiter";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./api/v1/config/swagger";

const app = express();

app.use(express.json());

// apply limiter only to API routes (better)
app.use("/cars", limiter);
app.use("/bookings", limiter);

// routes
app.use("/cars", carRoutes);
app.use("/bookings", bookingRoutes);

// swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req, res) => {
  res.send("Car Rental API Running");
});

export default app;