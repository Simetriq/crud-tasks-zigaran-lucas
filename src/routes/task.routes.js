import express from "express";
import routes from "./user.routes";

routesTask = express.Router();

routes.POST("/api/tasks:", crearTask);
routes.GET("/api/tasks:", obtenerTodasLasTask);
routes.GET("/api/tasks/:id:", obtenerTaskporId);
routes.PUT("/api/tasks/:id:", actualizarTask);
routes.DELETE("/api/tasks/:id:", borrarTask);

export default routesTask;
