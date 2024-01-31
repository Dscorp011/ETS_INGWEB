import mysql from 'mysql2/promise';

class UsuarioModel {
  constructor(conexionBD) {
    this.conexionBD = conexionBD;
  }

  async obtenerTodosLosUsuarios() {
    try {
      const [rows] = await this.conexionBD.query('SELECT * FROM usuarios');
      return rows;
    } catch (error) {
      throw error;
    }
  }

  async obtenerUsuarioPorId(id) {
    try {
      const [rows] = await this.conexionBD.query('SELECT * FROM usuarios WHERE id = ?', [id]);
      return rows[0];
    } catch (error) {
      throw error;
    }
  }

  async crearUsuario(usuario) {
    const { user, passwd, tipo } = usuario;
    try {
      const [result] = await this.conexionBD.query('INSERT INTO usuarios (user, passwd, tipo) VALUES (?, ?, ?)', [user, passwd, tipo]);
      return result.insertId;
    } catch (error) {
      throw error;
    }
  }

  async actualizarUsuario(id, usuario) {
    const { user, passwd, tipo } = usuario;
    try {
      await this.conexionBD.query('UPDATE usuarios SET user = ?, passwd = ?, tipo = ? WHERE id = ?', [user, passwd, tipo, id]);
      return true;
    } catch (error) {
      throw error;
    }
  }

  async eliminarUsuario(id) {
    try {
      await this.conexionBD.query('DELETE FROM usuarios WHERE id = ?', [id]);
      return true;
    } catch (error) {
      throw error;
    }
  }
  //Agregar método para validación de acceso según el tipo de usuario 
async validarUsuario(id) {
  try {
    const { user, passwd, tipo } = usuario;
    const [rows] = await this.conexionBD.query('SELECT * FROM usuarios WHERE id = ?', [id]);
    if(user==operador)
    return true
  else {
    return false
  }
  } catch (error) {
    throw error;
  }
}
}


export default UsuarioModel;
