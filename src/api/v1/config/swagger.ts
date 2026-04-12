import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Car Rental API",
      version: "1.0.0",
    },
  },
  apis: ["./src/api/v1/routes/*.ts"],
};

export const swaggerSpec = swaggerJsdoc(options);