import database from "../db/knexfile.js";

import { v4 as uuidv4 } from "uuid";

const actualizarValor = async (tabla, idKey, idValue, datos) => {
    await database(tabla).where(idKey, "=", idValue).update(datos);
};

const insertarData = async (tabla, datos) => {
    await database(tabla).insert({ ...datos });
};

const crearRenta = async (req, res) => {
    const {
        nombre,
        fecha_de_nacimiento,
        correo_electronico,
        direcciones,
        telefono,
        titulo_del_libro: titulo,
        fecha_de_prestamo,
        fecha_de_devolucion,
    } = req.body;

    const cliente_id = uuidv4();
    const renta_id = uuidv4();

    try {
        const resp = insertarData("clientes", {
            nombre,
            fecha_de_nacimiento,
            correo_electronico,
            cliente_id,
        });
        insertarData("direcciones", { direccion: direcciones, cliente_id });

        insertarData("referencias", { nombre, telefono, cliente_id });

        insertarData("renta_realizada", {
            renta_id,
            cliente_id,
            fecha_de_prestamo,
            fecha_de_devolucion,
        });

        const response = await database("libros").where("titulo", "=", titulo);
        const libro_id = response[0].libro_id;
        const cantidad = response[0].cantidad;

        insertarData("libros_rentados", {
            libro_id,
            renta_id,
        });

        actualizarValor("libros", "libro_id", libro_id, {
            cantidad: cantidad - 1,
        });

        return res.json({
            message: "Renta creada",
            resp,
        });
    } catch (error) {
        return res.json({
            Error: error,
        });
    }
};

export const Renta = {
    crearRenta,
};
