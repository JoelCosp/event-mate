const mysql = require('mysql2');

// Configura la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',  // o la URL de tu base de datos
  user: 'root',       // tu usuario de MySQL
  password: '',       // tu contraseña de MySQL
  database: 'event_mate' // el nombre de la base de datos
});

// Conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos: ', err);
    return;
  }
  console.log('Conexión a la base de datos MySQL establecida.');
});

// Exporta la conexión para usarla en otros archivos
module.exports = connection;
