const routes = require("express").Router();
const trainer = require("./cliente/clienteRoutes");
const BASE_URL = "/v1/usuario";
routes.use(BASE_URL, cliente);
//routes.use(BASE_URL, auth);

module.exports = routes;
