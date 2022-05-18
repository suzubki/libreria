import { Router } from "express";
import { default as register } from "./register.js";
import { default as libros } from "./libros.js";
import { default as usuarios } from "./usuarios.js";
import { default as login } from "./login.js";

const router = Router();

router.use("/login", login);
router.use("/register", register);
router.use("/libros", libros);
router.use("/usuarios", usuarios);

export default router;
