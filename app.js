import express from "express";
import dotenv from "dotenv";
import routes from "./src/routes/user.routes.js";
import testDB from "./src/config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.DB_PORT;

app.use(express.json());

app.use("/api", routes);

testDB().then(() => {
  app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto ${PORT}`);
  });
});
