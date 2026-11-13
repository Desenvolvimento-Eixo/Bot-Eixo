const { Client, GatewayIntentBits } = require('discord.js');

    const client = new Client({
        intents: [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildsMessages, 
            GatewayIntentBits.MessageCotent
    ]
});

client.once(Event.ClientReady, (readyClient) => {
    console.log('Aplicativo online! ${readyClient.user.tag}');
}); 

//Começando  o handler 

const fs = require('fs');
const path = require('path');

module.exports = (client) => {
    const commandsPath = path.join(__dirname, '../Comandos');

    const categoryFolders = fs.readdirSync(commandsPath);
}