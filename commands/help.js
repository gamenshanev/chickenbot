const discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {

let helpMessage = new discord.RichEmbed()
.setColor("#00ffd5")
.addField("Commands: ", "Prefix: !!") 
.addField("warn", "Warn een gebruiker")
.addField("help", "toon het help menu")
.addField("kick", "Kick een gebruiker")
.addField("ban", "Ban een gebruiker")
.addField("new", "maak een ticket aan")
.addField("ticket", "maak een ticket aan")
.addField("close", "close een ticket")
.addField("test", "test de bot")
.addField("info", "Krijg info over de bot")
.addField("8ball", "vraag iets aan de bot")
.addField("report", "Report een gebruiker")
.addField("sps", "Speel Steen Papier Schaar met de bot")
.addField("flip", "Laat bot random getal zeggen")
.addField("say", "Laat de bot iets zeggen")
.addField("sayembed", "Laat de bot iets zeggen in embed")
.addField("kopofmunt", "spele kop of munt")
.addField("idee", "zeg een idee")
.addField("clear", "clear messages")
.addField("ping", "speel ping pong met de bot")
.setFooter("Einde helpmenu");

message.channel.send(helpMessage);
}
module.exports.help = {
    name: "help",
    description: "Hier is het help menu"
}
