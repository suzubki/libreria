import Joi from "joi";

const GENEROS = [
    "Aventuras",
    "Ciencia Ficcion",
    "Policiaca",
    "Terror y misterio",
    "Romantica",
    "Humor",
    "Poesia",
    "Mitologia",
    "Teatro",
    "Cuento",
];

const libro = Joi.object({
    titulo: Joi.string().trim().required(),
    genero: Joi.string()
        .trim()
        .valid(...GENEROS),
    mayoria_de_edad: Joi.boolean().required(),
    portada: Joi.string().trim().required(),
    cantidad: Joi.number().required(),
    autor: Joi.string().trim(),
    editorial: Joi.string().trim(),
    fecha_de_impresion: Joi.date(),
    numero_de_pagina: Joi.number(),
    isbn: Joi.string().trim(),
    idiomas: Joi.object(),
    tipo: Joi.string().trim(),
});

const clientes = Joi.object({
    cliente_id: Joi.string().required(),
    nombre: Joi.string(),
    fecha_de_nacimiento: Joi.date(),
    correo_electronico: Joi.string(),
});

const ingresarRenta = Joi.object({
    fecha_de_prestamo: Joi.date().required(),
    fecha_de_devolucion: Joi.date().required(),
    tituloDelLibro: Joi.string().required(),
    nombre: Joi.string(),
    fecha_de_nacimiento: Joi.date(),
    correo_electronico: Joi.string(),
    telefono: Joi.number().integer(),
    direcciones: Joi.string(),
});

export const Schemas = {
    libro,
    clientes,
    ingresarRenta,
};
