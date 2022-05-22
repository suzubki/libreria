import { Schemas } from "../../schemas/index.js";

export const libroID = (req, res, next) => {
    const { id } = req.params;
    const uuidRegExp = new RegExp(
        /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
    );

    if (!id.match(uuidRegExp)) {
        return res.json({
            message: "Ingrese un id correcto",
        });
    }

    next();
};

export const libroSchema = (req, res, next) => {
    try {
        const result = Schemas.libro.validate({ ...req.body });
        if (result.error) throw Error(result.error);

        next();
    } catch (error) {
        return res.json({ Error: error.message });
    }
};
