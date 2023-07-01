const express = require('express');
const api = express.Router();
const {body} = require('express-validator');

var Usuarios = require('../controllers/usuarios');
let AuthController = require('../controllers/auth');

let userProtectUrl = require('../middlewares/authUser').userProtectUrl;

api.get("/usuarios", Usuarios.usuarios);
api.get("/usuario/:n_lista", Usuarios.usuario);
api.post("/usuario",userProtectUrl,[
    body('n_cuenta').not().isEmpty(),
    body('nombre').not().isEmpty(),
    body('edad').not().isEmpty(),
    body('genero').not().isEmpty()
], Usuarios.crear_usuario);

api.put("/usuario/:n_lista", [
    body('nombre').not().isEmpty(),
    body('edad').not().isEmpty(),
    body('genero').not().isEmpty()
],Usuarios.update_usuario);
api.delete("/usuario/:n_lista", Usuarios.delete_usuario);

api.post("/login", [
    body('mail').not().isEmpty(),
    body('pass').not().isEmpty()
],
AuthController.login);
api.post("/logout", userProtectUrl, AuthController.logout);

module.exports = api;