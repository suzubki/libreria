import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.json({
        message: "Entrando a usuarios",
    });
});

export default router;
