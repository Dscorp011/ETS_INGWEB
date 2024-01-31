import express from 'express';

import{ formularioLogin, formularioGestion,validacion} from '../controllers/usuarioController.js'

import {
    obtenerTodosLosUsuarios,
    obtenerUsuarioPorId,
    crearNuevoUsuario,
    actualizarUsuario,
    eliminarUsuario
  } from '../controllers/usuarioController.js';

//Utilizando el router de express
 const router=express.Router();

 //Ruta-nombre de función
router.get('/login',formularioLogin);
router.get('/gestion',formularioGestion);

// Rutas para obtener todos los usuarios y crear un nuevo usuario
router.route('/usuarios')
  .get(obtenerTodosLosUsuarios)
  .post(crearNuevoUsuario);

//Agregar nueva ruta para validar acceso según el tipo de usuario: usuario u operador 
router.get('/ingresar',validacion);

router.route('/usuario/:id')
  .get(obtenerUsuarioPorId)
  .put(actualizarUsuario)
  .delete(eliminarUsuario);

export default router