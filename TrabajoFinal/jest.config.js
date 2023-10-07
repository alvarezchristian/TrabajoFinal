module.exports = {
    // Rutas de los archivos de prueba
    testMatch: ['**/components/tests/**/*.js', '**/?(*.)+(spec|test).js'],
  
    // Carpetas ignoradas en las pruebas
    testPathIgnorePatterns: ['/node_modules/'],
  
    // Transforma archivos JavaScript utilizando Babel
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
  };
  