import { Router } from "express";
import jwt from "jwt-simple";
import bcrypt from "bcrypt";

import database from "../db/knexfile.js";

const router = Router();

router.post("/", async (req, res) => {
    const { correo_electronico, contraseña } = req.body;

    if (!correo_electronico || !contraseña) {
        res.json({
            message: "Ingresa credenciales correctas",
        });
    }

    try {
        /**
         * Buscamos la contraseña en la base de datos y la comparamos(boolean)
         * **/
        const responseDatabase = await database("usuarios")
            .select("*")
            .where("correo_electronico", "=", correo_electronico);
        const {
            nombre: nombreUsuario,
            contraseña: contraseñaEncryptadaDatabase,
        } = responseDatabase[0];
        const compararContraseña = bcrypt.compareSync(
            contraseña,
            contraseñaEncryptadaDatabase
        );

        if (!compararContraseña) {
            return res.json({
                message: "Contraseña incorrecta",
            });
        }

        /**
         * Creación de Token JWT
         * **/

        const payload = {
            nombreUsuario,
            createdAt: new Date().getDate(),
        };

        return res.json({
            message: "Contraseña encontrada",
            contraseña: contraseñaEncryptadaDatabase,
            comparar: compararContraseña,
            responseDatabase,
            token: jwt.encode(payload, process.env.TOKEN_KEY),
        });
    } catch (error) {
        res.json({
            message: "Error:" + error,
        });
    }
});

export default router;
