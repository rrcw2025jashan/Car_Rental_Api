import Joi from "joi";

export const carSchema = Joi.object({
  id: Joi.string().required(),
  brand: Joi.string().required(),
  model: Joi.string().required(),
  pricePerDay: Joi.number().required(),
});