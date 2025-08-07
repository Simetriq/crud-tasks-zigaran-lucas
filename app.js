import express from "express";
import dotenv from "dotenv";
import routesUser from "./src/routes/user.routes.js";
import routesTask from "./src/routes/task.routes.js";
import testDB from "./src/config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/api", routesUser);
app.use("/api", routesTask);

testDB().then(() => {
  app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto ${PORT}`);
  });
});
