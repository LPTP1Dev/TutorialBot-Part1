const Discord = require('discord.js');
const client = new Discord.Client()
const token = "Bot_Token_einfügen."
client.login(token)
console.log("Melde an....")

client.on("ready", () => {
console.log("Angemeldet als "+client.user.username)
client.user.setActivity("mit 30 Zeilen Programmiercode")
})

client.on("message", (message) => { 
	if (message.author.bot) {
		return
		}
if (message.content.startsWith("!ping")) {
message.channel.send("Pong! Latenz: "+client.ping+" ms")
	}
	if (message.content.startsWith("!help")) {
		const embed = new Discord.RichEmbed()
		         .setTitle("Hilfe")
		         .setDescription("Die Hilfe-Seite des "+client.user.username+"'s")
		         .setColor('#ff0000')
		         .addField("Befehle", "Befehle für Server Administratoren:")
		         .addField("!ping", "Zeigt die Bot Ping")
		         .addField("!help", "Zeigt diese Hilfeseite an")
		message.channel.send(embed)
		}
})
