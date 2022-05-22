import { Router } from "express";

import { Libros } from "../controllers/librosController.js";
import { LibrosMiddleware } from "../middlewares/LibrosMiddlewares.js";

const router = Router();

router.get("/", Libros.conseguirLibrosController);

router.post("/", LibrosMiddleware.libroSchema, Libros.enviarLibroController);

router.put(
    "/:id",
    LibrosMiddleware.libroID,
    LibrosMiddleware.libroSchema,
    Libros.actualizarLibroController
);

router.delete("/:id", LibrosMiddleware.libroID, Libros.eliminarLibroController);

export default router;
