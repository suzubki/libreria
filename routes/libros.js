import { Router } from "express";

import { Libros } from "../controllers/librosController.js";

const router = Router();

router.get("/", Libros.conseguirLibrosController);

router.post("/", Libros.enviarLibroController);

router.put("/:id", Libros.actualizarLibroController);

router.delete("/:id", Libros.eliminarLibroController);

export default router;
