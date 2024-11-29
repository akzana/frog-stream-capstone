import express from "express";
import "dotenv/config";
import cors from "cors";
import usersRoutes from "./routes/usersRoutes.js";

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", usersRoutes);

app.get("/", (_req, res) => {
  res.send("backend 'homepage'. ");
});

app.listen(PORT, () => {
  console.log("app running on port ", PORT);
});