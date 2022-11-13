const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix

exports.run = async (client ,message, args) => {

if(args[0] === 'aç') {
  db.set(`${message.guild.id}.kufur`, true)

const phentos = new Discord.MessageEmbed()  
 
.setDescription(`Küfür Engel Başarılı Bir Şekilde Akif Edildi!`)
.setColor("GREEN")

return message.channel.send(phentos)
}
  
if (args[0] === 'kapat') {

db.delete(`${message.guild.id}.kufur`)
  
const phentos = new Discord.MessageEmbed() 

.setDescription(`Küfür Engel Başarılı Bir Şekilde Deaktif Edildi!`)
.setColor("GREEN")
  
return message.channel.send(phentos)
}
{

const phentos = new Discord.MessageEmbed() 
  
.setDescription('Lütfen **aç** Veya **kapat** Yazın. Örnek Kullanım : **${prefix}küfür-engel aç/kapat**')
.setColor("RED")

return message.channel.send(phentos)
}
 
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['küfürengel'], 
 permLevel: 0
};

exports.help = {
 name: 'küfür-engel',
 description: 'voxic',
 usage: 'küfür-engel'
};