import { Router } from "express";
import database from "../db/knexfile.js";

const router = Router();

router.get("/", async (req, res) => {
    let response = {};
    try {
        response = await database("libro_usuario").select("libro_id");
        return res.json({
            message: "entrando al path libros",
            data: response,
        });
    } catch (error) {
        return res.json({
            message: "Error " + error,
        });
    }
});

export default router;
