export const fetchScheduledEvents = async () => {
    // debugger;
    const response = await fetch('http://localhost:5173/scheduled_events')
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log('Events:', data);
    return data;
};