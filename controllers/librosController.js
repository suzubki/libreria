import { v4 as uuidv4 } from "uuid";

import database from "../db/knexfile.js";

const conseguirLibrosController = async (req, res) => {
    try {
        const response = await database("libros").select("*");
        return res.json({
            message: "Ok",
            response,
        });
    } catch (error) {
        return res.json({
            message: "Error " + error,
        });
    }
};

/**
 * Requerido: titulo, genero, mayoria_de_edad, portada, cantidad, libro_id
 * No requerido: autor, editorial, fecha_de_impresion, numero_de_pagina, isbn, idiomas, tipo
 **/
const enviarLibroController = async (req, res) => {
    try {
        await database("libros").insert({ ...req.body, libro_id: uuidv4() });

        return res.json({
            message: "Libro ingresado correctamente",
        });
    } catch (error) {
        return res.json({
            message: "Error en la base de datos",
            error,
        });
    }
};

const actualizarLibroController = async (req, res) => {
    const { id } = req.params;

    try {
        await database("libros")
            .where("libro_id", "=", `${id}`)
            .update({ ...req.body });
        return res.json({
            message: "Libro actualizado, gracias!",
        });
    } catch (error) {
        return res.json({
            message: `Error + ${error}`,
        });
    }
};

const eliminarLibroController = async (req, res) => {
    const { id } = req.params;

    try {
        await database("libros").where("libro_id", "=", `${id}`).del();
        return res.json({
            message: "Libro eliminado :(",
        });
    } catch (error) {
        return res.json({
            message: "Error en la base de datos",
            error,
        });
    }
};

export const Libros = {
    conseguirLibrosController,
    enviarLibroController,
    actualizarLibroController,
    eliminarLibroController,
};
