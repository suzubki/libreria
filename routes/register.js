import { Router } from "express";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

import database from "../db/knexfile.js";

const router = Router();

router.get("/", (req, res) => {
    res.json({
        message: "Entrando al path register",
    });
});

router.post("/", async (req, res) => {
    try {
        req.body.contraseña = bcrypt.hashSync(req.body.contraseña, 10);
        const { nombre, contraseña, correo_electronico } = req.body;

        if (!nombre || !contraseña || !correo_electronico) {
            return res.json({
                message: "Ingrese credenciales correctas",
            });
        }

        const response = await database("usuarios").insert({
            nombre,
            contraseña,
            correo_electronico,
            usuario_id: uuidv4(),
        });

        return res.json({
            message: "Usuario registrado con éxito !!",
            data: req.body,
            response,
        });
    } catch (error) {
        return res.json({
            message: "Error " + error,
        });
    }
});

export default router;
