import express from "express";
import carRoutes from "../src/api/v1/routes/carRoutes";
import bookingRoutes from "../src/api/v1/routes/bookingRoutes";
import { limiter } from "./api/v1/middlewares/rateLimiter";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./api/v1/config/swagger";
import authRoutes from "./api/v1/routes/authRoutes";
import reviewRoutes from "./api/v1/routes/reviewRoutes";

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
// reviews
app.use("/reviews", reviewRoutes);

app.get("/", (req, res) => {
  res.send("Car Rental API Running");
});

export default app;