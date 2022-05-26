import express from "express";
import cors from "cors";

import routes from "./routes/index.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use("/", routes);

app.listen(PORT, () => console.log("Listening on Port + " + PORT));
