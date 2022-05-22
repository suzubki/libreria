import { Schemas } from "../../schemas/index.js";

export const ingresarRentaSchema = (req, res, next) => {
    try {
        const result = Schemas.ingresarRenta.validate({ ...req.body });
        if (result.error) throw Error(result.error);

        next();
    } catch (error) {
        return res.json({ Error: error.message });
    }
};
