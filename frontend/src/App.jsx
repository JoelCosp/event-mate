import { useState, useEffect } from 'react';
import { getCharacters } from './services/EventsService';
import './App.css';

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const response = await getCharacters();
        setEvents(response.characters);
      } catch (error) {
        console.error('Error al cargar los eventos:', error);
      }
    };

    loadEvents();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

      <div>
        <h2>Eventos:</h2>
        <ul>
          {events.length > 0 ? (
            events.map((event) => (
              <li key={event.id}>
                {event.name} - {event.location} - {event.date}
              </li>
            ))
          ) : (
            <p>No hay eventos disponibles.</p>
          )}
        </ul>
      </div>
    </>
  );
}

export default App;
