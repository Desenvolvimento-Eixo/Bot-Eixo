const { Client, GatewayIntentBits } = require('discord.js');

    const client = new Client({
        intents: [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildsMessages, 
            GatewayIntentBits.MessageCotent
    ]
});

client.once(Events.ClientReady, (readyClient) => {
    console.log('Aplicativo online! ${readyClient.user.tag}');
}); 

//Começando  o handler 