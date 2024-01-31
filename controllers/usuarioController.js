import usuarioModel from './models/usuarioModel.js';

const formularioLogin =(req,res)=>{

    res.render('auth/login',{
  
    })
}

const formularioGestion =(req,res)=>{

    res.render('auth/gestion',{
    
    })
}
const ingresar =(req,res)=>{

    res.render('auth/gestion',{
    
    })
}
//Agregar nuevas funciones de redirección al controlador 
export{
    formularioLogin,
    formularioGestion
    
}