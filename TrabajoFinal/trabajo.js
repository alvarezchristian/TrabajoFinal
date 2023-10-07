class Trabajador {
    constructor(nombre, rol, apellido_paterno, dni) {
      this.nombre = nombre;
      this.rol = rol;
      this.dni = dni;
      this.apellido_paterno = apellido_paterno;
    }
  }
  
const Roles = {
    ADMIN: 'Admin',
    EMPLEADO: 'Empleado',
  };

function asignarRol(trabajador, rol) {
    if (Object.values(Roles).includes(rol)) {
        trabajador.rol = rol;
      return `Role asignado satisfactoriamente: ${trabajador.nombre} es ahora ${rol}.`;
    } else {
      return `Rol inválido: ${rol}. Por favor escoja un rol válido.`;
    }
  }

module.exports = {Trabajador, asignarRol, Roles};