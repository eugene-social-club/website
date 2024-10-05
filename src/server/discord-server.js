import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { getGuildScheduledEvents } from './utils/discord_utils.js';

const app = express();

app.listen(5173, () => {
    console.log(`Server is running on port ${5173}`);
});

app.get('/scheduled_events', async function (req, res) {
    console.log('Getting scheduled events');
    console.log('Guild ID:', process.env.DISCORD_GUILD_ID);
    const guild_id = process.env.DISCORD_GUILD_ID;
    const events = await getGuildScheduledEvents(guild_id);
    console.log('Events:', events);
    return res.json(events);
});