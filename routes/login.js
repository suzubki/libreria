import { Router } from "express";

import { Usuario } from "../controllers/loginController.js";

const router = Router();

router.post("/", Usuario.ingresarUsuarioController);

export default router;
