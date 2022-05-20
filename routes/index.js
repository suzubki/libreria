import { Router } from "express";

import { default as login } from "./login.js";
import { default as register } from "./register.js";
import { default as libros } from "./libros.js";
import { default as rentas } from "./rentas.js";

const router = Router();

router.get("/", (req, res) => {
    console.log(process.env.DATABASE_URL);
    res.send("<h1>Bienvenido</h1>");
});

router.use("/login", login);
router.use("/register", register);
router.use("/libros", libros);
router.use("/rentas", rentas);

export default router;
