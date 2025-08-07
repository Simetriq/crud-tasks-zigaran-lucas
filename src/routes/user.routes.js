import express from "express";

routes = express.Router();

routes.POST("/api/users:", createUser);
routes.GET("/api/users:", traerTodoLosUser);
routes.GET("/api/users/:id:", traerUserId);
routes.PUT("/api/users/:id:", actualizarUser);
routes.DELETE("/api/users/:id:", borrarUser);

export default routes;
