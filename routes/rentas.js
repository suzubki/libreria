import { Router } from "express";
import { Renta } from "../controllers/rentaController.js";

import { RentasMiddleware } from "../middlewares/RentasMiddleware.js";

const router = Router();

//Renta realizada
router.post("/", RentasMiddleware.ingresarRentaSchema, Renta.crearRenta);

export default router;
