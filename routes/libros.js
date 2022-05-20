import { Router } from "express";
import Joi from "joi";

import { Libros } from "../controllers/librosController.js";

const router = Router();

router.get("/", Libros.conseguirLibrosController);

const myFirstMiddleware = (req, res, next) => {
    const postLibroSchema = Joi.object({
        titulo: Joi.string().required(),
        genero: Joi.string().required(),
        mayoria_de_edad: Joi.boolean().required(),
        portada: Joi.string().required(),
        cantidad: Joi.number().required(),
        autor: Joi.string(),
        editorial: Joi.string(),
        fecha_de_impresion: Joi.date(),
        numero_de_pagina: Joi.number(),
        isbn: Joi.string(),
        idiomas: Joi.object(),
        tipo: Joi.string(),
    });
};

router.post("/", Libros.enviarLibroController);

router.put("/:id", Libros.actualizarLibroController);

router.delete("/:id", Libros.eliminarLibroController);

export default router;
