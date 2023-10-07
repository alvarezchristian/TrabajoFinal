class Trabajador {
    constructor(nombre, rol) {
      this.nombre = nombre;
      this.rol = rol;
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