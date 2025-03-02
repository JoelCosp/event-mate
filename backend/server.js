const express = require('express');
const app = express();
const port = 5000;
const { getAllEvents, getGuestsByEvent } = require('./queries'); // Importa las funciones

// Middleware para parsear JSON
app.use(express.json());

// Ruta para obtener todos los eventos
app.get('/events', (req, res) => {
  /* getAllEvents((err, events) => {
    if (err) {
      return res.status(500).json({ error: 'Error al obtener los eventos' });
    }
    res.json(events);
  }); */

  getAllEvents();
});

// Ruta para obtener los invitados de un evento
app.get('/events/:id/guests', (req, res) => {
  const eventId = req.params.id;
  getGuestsByEvent(eventId, (err, guests) => {
    if (err) {
      return res.status(500).json({ error: 'Error al obtener los invitados' });
    }
    res.json(guests);
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
