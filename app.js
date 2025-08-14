import express from "express";
import dotenv from "dotenv";
import routesUser from "./src/routes/user.routes.js";
import routesTask from "./src/routes/task.routes.js";
import testDB from "./src/config/db.js";
import routesProfile from "./src/routes/profile.routes.js";
import courseRoutes from "./src/routes/course.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/api", routesUser);
app.use("/api", routesTask);
app.use("/api", routesProfile);
app.use("/api", courseRoutes);

testDB().then(() => {
  app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto ${PORT}`);
  });
});
