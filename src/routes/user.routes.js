import express from "express";

const routesUser = express.Router();

routesUser.post("/api/users:", createUser);
routesUser.get("/api/users:", traerTodoLosUser);
routesUser.get("/api/users/:id:", traerUserId);
routesUser.put("/api/users/:id:", actualizarUser);
routesUser.delete("/api/users/:id:", borrarUser);

export default routesUser;
