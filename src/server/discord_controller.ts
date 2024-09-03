import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { getGuildScheduledEvents } from './utils/discord_utils';

const app = express();

app.get('/scheduled_events', async function (req, res) {
    console.log('Getting scheduled events');
    console.log('Guild ID:', process.env.GUILD_GANG_ID);
    debugger;
    const guild_id = "1033252271582085172";
    const events = await getGuildScheduledEvents(guild_id);
    console.log('Events:', events);
    return res.json(events);
});