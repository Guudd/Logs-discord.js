const discord = require('discord.js')
const client = new discord.Client()
const token = require("./config.json")


client.on('ready', function() {
    console.log("Launched | | Created by Gud#0001")
    console.log("Disfruta!")
    console.log("twitch.tv/gudd27 | ")
});








client.on('messageDelete', message => {
   const embed = new discord.MessageEmbed()
     .setColor('#FE2D00')
     .setAuthor(`${message.author.tag} | ID ${message.author.id} `)
     .setDescription(
     `**Mensaje:** ${(message.content)} 
     **Mensaje ID** ${message.id}
     **Canal** #${message.channel.name}
     **Canal ID** ${message.channel.id}
     **Server** ${message.guild.name}
     **Server ID** ${message.guild.id}`)
     .setThumbnail(`https://cdn.discordapp.com/attachments/852400195906961469/852869402793869322/aa0efcf893991a6f26b6c9644fb76f6d.png`)
     .setFooter(`Bot creado por .Gud#0001`)
     .setTimestamp()
 
  const channel = client.channels.cache.get('')
   //Pongan la id del canal
   
 })




 


client.login(token)
