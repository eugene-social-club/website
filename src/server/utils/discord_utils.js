import 'dotenv/config';


export async function DiscordRequest(endpoint, options) {
    console.log('Making request to:', endpoint);
    // append endpoint to root API URL
    const url = 'https://discord.com/api/v10/' + endpoint;
    // Stringify payloads
    if (options.body) options.body = JSON.stringify(options.body);
    // Use fetch to make requests
    console.log('Making request to:', url);
    const res = await fetch(url, {
        headers: {
            Authorization: `Bot ${process.env.DISCORD_TOKEN}`
        },
        ...options
    });
    const data = await res.json();
    // throw API errors
    if (!res.ok) {
        const data = await res.json();
        console.log(res.status);
        throw new Error(JSON.stringify(data));
    }
    // return original response
    return data;
}

export async function getGuildScheduledEvents(guild_id) {
    const endpoint = `guilds/${guild_id}/scheduled-events`;
    await DiscordRequest(endpoint, { method: 'GET' });
}