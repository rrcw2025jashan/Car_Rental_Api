import express from "express";
import carRoutes from "../src/api/v1/routes/carRoutes";
const app = express();
app.use(express.json());

app.use("/cars", carRoutes);

app.get("/", (req, res) => {
  res.send("Car Rental API Running");
});

export default app;