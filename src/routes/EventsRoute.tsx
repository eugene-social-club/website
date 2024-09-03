import { useEffect, useState } from 'react';
import { fetchScheduledEvents } from '../services/events';
export function EventsRoute() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const getEvents = async () => {
            try {
                const eventsData = await fetchScheduledEvents();
                setEvents(eventsData);
                debugger; // This should be hit if fetchScheduledEvents is successful
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };
        getEvents().then(r => console.log('Events:', r));
    }, []);
debugger;
    return (
        <div>
            <h1>Scheduled Events</h1>
            <ul>
                {events.map(event => (
                    <li key={event.id}>{event.name}</li>
                ))}
            </ul>
        </div>
    );
}
