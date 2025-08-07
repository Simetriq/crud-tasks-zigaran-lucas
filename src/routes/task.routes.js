import express from "express";

const routesTask = express.Router();

routesTask.post("/api/tasks:", crearTask);
routesTask.get("/api/tasks:", obtenerTodasLasTask);
routesTask.get("/api/tasks/:id:", obtenerTaskporId);
routesTask.put("/api/tasks/:id:", actualizarTask);
routesTask.delete("/api/tasks/:id:", borrarTask);

export default routesTask;
