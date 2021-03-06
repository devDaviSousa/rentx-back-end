import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { Router } from "express";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAutheticated } from "../middlewares/ensureAuthenticated";

const carsRoutes = Router();
const createCarController = new CreateCarController();

carsRoutes.post(
  "/",
  ensureAutheticated,
  ensureAdmin,
  createCarController.handle
);

export { carsRoutes };
