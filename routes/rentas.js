import { Router } from "express";
import { Renta } from "../controllers/rentaController.js";

const router = Router();

router.post("/", Renta.crearRenta);

export default router;
