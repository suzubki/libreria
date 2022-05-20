import { Router } from "express";
import Joi from "joi";

import { Libros } from "../controllers/librosController.js";

const router = Router();

router.get("/", Libros.conseguirLibrosController);

const postLibroMiddleware = (req, res, next) => {
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

    try {
        //Validate Async
        const result = postLibroSchema.validate({ ...req.body });
        console.log(result);
        next();
    } catch (error) {
        return res.json({
            message:
                "Error al validar, asegúrate de que todo los datos hayan sido ingresados correctamente!",
            error,
        });
    }
};

router.post("/", postLibroMiddleware, Libros.enviarLibroController);

router.put("/:id", Libros.actualizarLibroController);

router.delete("/:id", Libros.eliminarLibroController);

export default router;
