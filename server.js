import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import playerRoutes from "./routes/playerRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);
app.use("/players", playerRoutes);

app.listen(3001, () => {
  console.log("Servidor rodando em http://localhost:3001");
});