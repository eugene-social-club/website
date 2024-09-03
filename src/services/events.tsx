export const fetchScheduledEvents = async () => {
    const response = await fetch('http://localhost:5173/scheduled_events');
    const data = await response.json();
    debugger;
    return data;
};