const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "#";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`PLAYERUNKNOWN'S BATTLEGROUNDS`,"http://twitch.tv/Shoukomoe")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
/////////////////////


  

/////////////////////
client.on("message", message => {
    var prefix = "+";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **ليس لديك صلاحيات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم",
        color: 0x06DF00,
        description: "تم مسح الرسائل بنجاح",
        footer: {
          text: "Heroku"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});
/////////////////////



// auto reply
client.on('message', msg => {
    if (msg.content === 'احبك') {
      msg.channel.send('**لاتحتك يا اخوي لو سمحت**');
    }
  });
  
  client.on('message', msg => {
    if (msg.content === '.') {
      msg.channel.send('**احلى نقطه يعومري**');
    }
  });
  
  client.on('message', msg => {
    if (msg.content === 'ping') {
      msg.channel.send('**pong**');
    }
  });
  
    client.on('message', msg => {
    if (msg.content === 'السلام عليكم') {
      msg.channel.send('**و عليكم السلام :slight_smile:**');
    }
  });
  
      client.on('message', msg => {
    if (msg.content === 'هاي') {
      msg.channel.send('**هاي ولاجبر خاطر؟**');
    }
  });

////////////////////////////

  client.on('message', message => {
  if (message.content === "-id") {
  let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)  
.setAuthor(message.author.username)
.setDescription("**معلومات عن الحــساب**")
            .setFooter(`PLAZa Network`, 'PLAZa')
.setColor("#9B59B6")
.addField("**اســـم الحســاب**", `${message.author.username}`)
.addField('**تاق الحساب الخاص**', message.author.discriminator)
.addField("**الرقـــم الشـــخصي**", message.author.id)
.addField('**بــــوت**', message.author.bot)
.addField("**تاريخ التسجيل**", message.author.createdAt)


message.channel.sendEmbed(embed);
 }
});
///////////////////////////////////////////////////////////////



client.on('message', message => {
    if (message.content.startsWith("+avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});


  client.on('typingStart', (ch, user) => {
    if(user.presence.status === 'offline') {
        
        ch.send(`${user} هاهاهاا , كشفتك وانت تكتب ي اوف لاين`)
        .then(msg => {
            msg.delete(10000)
        })
    }
})
  
client.on('message', msg => {

    if (msg.content == '!ادخل') {
        if (msg.member.voiceChannel) {

     if (msg.member.voiceChannel.joinable) {
         msg.member.voiceChannel.join();
     }
    }
}
})

client.on('message', function(msg) {
    const prefix = '^'
    if(msg.content.startsWith ('server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`معلومات سيرفر  **${msg.guild.name}*`)
      .addField('🌐** مكان السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField('🏅** __الرولات__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField('🔴**__ عدد الأعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField('🔵**__ عدد الأعضاء الأون لاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField('📝**__ عدد الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField('🎤**__ عدد الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField('👑**__ صاحب السيرفر__**',`**${msg.guild.owner}**`,true)
      .addField('🆔**__ أي دي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField('📅**__تاريخ إنشاء السيرفر __**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });

////////////////////////////////////////////////////

  client.on('message', message => {
if(message.content == '<@613736154189135887>') {
message.channel.startTyping()
setTimeout(() => { 
message.channel.stopTyping()
}, 7000);
}
});





///////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})

//////////////////////////////////////////////////////////

client.on('message', message => {

     if (message.author.bot) return;
    if (!message.channel.guild) return;
    if (message.content.startsWith(prefix + 'mb')) {
        if (!message.channel.guild) return;
        let embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setThumbnail(message.author.avatarURL)
            .setFooter(message.author.username, message.author.avatarURL)

        .setDescription(`**:battery: حالة اعضاء السيرفر**
    
**:green_heart: Online**  **[ ${message.guild.members.filter(m=>m.presence.status == 'online').size} ]**
**:yellow_heart: Idle**       **[ ${message.guild.members.filter(m=>m.presence.status == 'idle').size} ]**  
**:heart: DND**     **[ ${message.guild.members.filter(m=>m.presence.status == 'dnd').size} ]**
**:black_heart: Offline** **[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]** `)

        message.channel.send()

        message.channel.sendEmbed(embed)
    }
});



  
 ////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////




///////////////////////////////////////////////
client.on('message', message => {
  if (message.content === '!join') {
    // Note that this will only work if the message was sent in a guild
    // and the author is actually in a voice channel.
    // You might want to check for all that stuff first
    const channel = message.member.voiceChannel;

    channel.join()
    .then(connection => console.log('Connected!'))
    .catch(console.error);
  }
});
//////////////////////////////////////////////////////////////////////////////////////////

client.login(process.env.BOT_TOKEN);
