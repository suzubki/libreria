import { Router } from "express";

import { Registrar } from "../controllers/registrarController.js";

const router = Router();

router.post("/", Registrar.registrarUsuarioController);

export default router;
