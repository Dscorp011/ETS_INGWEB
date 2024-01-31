import express from 'express'
import mysql from 'mysql2/promise';

//Creando el servidor 
const app=express()

// Configuración de la conexión a la base de datos
const conexionBD = async () => {
    try {
      const connection = await mysql.createConnection({
        host: 'localhost', 
        user: 'root', 
        password: 'root', 
        database: 'mydb' 
      });
      console.log('Conexión a la base de datos establecida');
      return connection;
    } catch (error) {
      console.error('Error al conectar a la base de datos:', error.message);
      throw error;
    }
  };
  
  // Agregar la conexión a la base de datos a las solicitudes
  app.use(async (req, res, next) => {
    req.conexionBD = await conexionBD();
    next();
  });

//Importando rutas de la app
import usuarioRutas from './rutas/rutasUsuario.js'

//Habilitar pug
app.set('view engine','pug')
app.set('views','./views')

//Routing
app.use('/auth',usuarioRutas)

//Definiendo el puerto y ejecutando el proyecto mediante nodemon
const puerto=5000;
app.listen(puerto, ()=>{
    console.log('Servidor ejecutandose en el puerto:',puerto);
});