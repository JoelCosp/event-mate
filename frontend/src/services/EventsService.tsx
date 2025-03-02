import { Event } from '../models/Event';

export const getCharacters = async (): Promise<{ characters: Event[] }> => {
    const response = await fetch("http://localhost:5000/events");
    const data = await response.json();
    return data;
};

