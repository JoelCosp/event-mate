const connection = require('./db'); // Importa la conexión de la base de datos

// Función para obtener todos los eventos
function getAllEvents(callback) {
  const sql = 'SELECT * FROM events';
  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error al obtener eventos: ', err);
      return callback(err);
    }
    callback(null, results); // Devuelve los resultados al callback
  });
}

// Función para obtener todos los invitados de un evento
function getGuestsByEvent(eventId, callback) {
  const sql = 'SELECT * FROM guests WHERE event_id = ?';
  connection.query(sql, [eventId], (err, results) => {
    if (err) {
      console.error('Error al obtener invitados: ', err);
      return callback(err);
    }
    callback(null, results);
  });
}

// Exporta las funciones para usarlas en otros archivos
module.exports = {
  getAllEvents,
  getGuestsByEvent
};
