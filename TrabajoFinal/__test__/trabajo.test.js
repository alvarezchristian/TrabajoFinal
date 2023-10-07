const { Trabajador, asignarRol, Roles } = require('../trabajo');

test('asignar rol admin a juan', () => {
    const juan = new Trabajador('Juan', Roles.EMPLEADO);
    asignarRol(juan, Roles.ADMIN);
    expect(juan.rol).toBe(Roles.ADMIN);
  });