import express from "express";
import carRoutes from "../src/api/v1/routes/carRoutes";
import bookingRoutes from "../src/api/v1/routes/bookingRoutes";
<<<<<<< HEAD
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./api/v1/config/swagger";

const app = express();
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
=======
import { limiter } from "./api/v1/middlewares/rateLimiter";

const app = express();
app.use(express.json());
app.use(limiter);
>>>>>>> feature/rate-limiter

app.use("/cars", carRoutes);
app.use("/bookings", bookingRoutes);

app.get("/", (req, res) => {
  res.send("Car Rental API Running");
});

export default app;