const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });

const logs = '819268777875210270'
const mrjordinnid = '356919501322846220'
const mrjordinn = '818817614486306846'
const staff = '818852615172391023'
const trialmod = '818817778684395521'
const mod = '818817769692463144'
const seniormod = '818817764718280734'
const admin = '818817758904582164'
const senioradmin = '818817751694442496'
const superadmin = '818817744635035688'
const mt = '818852627118293012'
const asstdirector = '818852599096803338'
const director = '818852592284467230'
const god1 = '818852561938284565'
const god2 = '818817786604027934'
var prefix = '-'

function simpleEmbed(hex,title,Description,ftitle,ftext,footer,inline){
	const Temp = new Discord.MessageEmbed()
	.setColor(hex)
	.setTitle(title)
	.setDescription(Description)
	.addField(ftitle, ftext, inline)
	.setFooter(footer)
	.setTimestamp()
	return Temp
}

function error_c(_errorMsg,_ecode){
	if (_ecode !== "CAUGHT") {
	return simpleEmbed("#FF5E33","Error-" + _ecode,"Command Error","There has been an error.",_errorMsg, 'If this persists, contact MrJordinn#1904', false);
	} else {

		
		var mention = '356919501322846220'
	 return simpleEmbed("#ff3333","Error-"+_ecode,"Unhandled Exception","An error has been caught.",`<@${mention}> Caught: ${_errorMsg}`,'Please contact MrJordinn#1904', false);
	}

}

client.on('ready', () => {
    console.log('Bot is now up and running!');
    client.user.setActivity("MrJordinn || Prefix -", {
        type: "LISTENING",
	})
})
	client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(channel => channel.name === "welcome");
    if (!channel) return;
    channel.send(`Welcome to th3c0nnman roleplay, ${member}!`)
});

client.on('message', (message) => {

    if (message.author.bot) return; // EWWWW NASTY BOT MESSAGEEWWERERRG GRBHKGHJFHJNH
    if (!message.content.startsWith(prefix)) return;
        const commandBody = message.content.slice(prefix.length);
         const args = commandBody.split(' ');
         const command = args.shift().toLowerCase();

            if (command === "commands") {
            const embed = new Discord.MessageEmbed()
            .setTitle('Commands')
            .addField('General commands', '-8ball (question) \n -test', true)
            .addField('Moderation commands', '-kick \n -ban', true)
            .addField('Management Commands', '-trialmod (user) \n -mod (user) \n -seniormod (user) \n -admin (user) \n -senioradmin (user) \n -superadmin (user)', true)
            .setColor(0x00104A)
            .setThumbnail(message.guild.iconURL)
            .setFooter('Bot coded by MrJordinn.')
            .setTimestamp();
            message.channel.send(embed);
        }

        if (command === "test") {
            message.reply('I am working fine!')
        }

            if (command === "8ball") {
                if (message.member.roles.cache.has('818852632595791933')) {
                    message.reply('You are banned from using this command.')
                    return
                } else {
            var rand = ['Yes.', 'No.', 'Why are you even trying?', 'What do you think? NO!', 'Maybe...', 'Never.', 'Yep.', 'Uhhhhh nah.', 'Hell no!', 'Yeah totally!', 'Idk about that one.', "I'm gonna have to say no to that one...", 'Probably not', 'Sorry but.... no', "Don't go and cry to your mommy but.... it's a no from me.", 'Of course!', 'Ooooo yeah', "It's a yes from me.", 'HELL YEAH!', 'ha ha ha...... yeah', 'Imma just say yeah', 'frick yeah', 'nononono', 'Mhm', 'yes yes yes'];
            var yesOrNo = rand[Math.floor(Math.random()*rand.length)];
            message.channel.send(yesOrNo + '\n \n **-Response to 8ball requested by <@' + message.author.id + '>**');
            }
        }

            if (command === "8ball_y") {
                if (message.author.id !== "356919501322846220") {  // || message.author.id !=="545431527253606412") { //ifstart
                message.channel.send('**Only the epic MrJordinn can use this 8ball command.** <@' + message.author.id + '>')
                return
                } else {
                var rand = ['Yes.', 'Yas.', 'Mhm', 'Yep.', 'Yeah totally!', 'Of course!', 'Ooooo yeah', "It's a yes from me.", 'HELL YEAH!', 'ha ha ha...... yeah', 'Imma just say yeah', 'frick yeah', 'yes yes yes'];
                var yesOrNo = rand[Math.floor(Math.random()*rand.length)];
                message.channel.send(yesOrNo + '\n \n **-Response to 8ball_y requested by <@' + message.author.id + '>**');
                }
            }

            if (command === "superadmin") {
                if (!message.member.roles.cache.get(mt)) {
                    message.channel.send('**You need to be management team to use this command.** <@' + message.author.id + '>')
                    return
                } else {
                    const userrole = message.mentions.members.first();
                    userrole.roles.add(superadmin).catch(error => { return message.channel.send(error_c(error,"CAUGHT"))} )
                    userrole.roles.add(staff).catch(error => { return message.channel.send(error_c(error,"CAUGHT"))} )
                    userrole.roles.add(god1).catch(error => { return message.channel.send(error_c(error,"CAUGHT"))} )
                    message.channel.send('Successfully given roles!')      
                }
            }
                if (command === "senioradmin") {
                if (!message.member.roles.cache.get(mt)) {
                    message.channel.send('**You need to be management team to use this command.** <@' + message.author.id + '>')
                    return
                } else {
                    const userrole = message.mentions.members.first();
                    userrole.roles.add(senioradmin).catch(error => { return message.channel.send(error_c(error,"CAUGHT"))} )
                    userrole.roles.add(staff).catch(error => { return message.channel.send(error_c(error,"CAUGHT"))} )
                    message.channel.send('Successfully given roles!')      
                }
            }
            if (command === "admin") {
                if (!message.member.roles.cache.get(mt)) {
                    message.channel.send('**You need to be management team to use this command.** <@' + message.author.id + '>')
                    return
                } else {
                    const userrole = message.mentions.members.first();
                    userrole.roles.add(admin).catch(error => { return message.channel.send(error_c(error,"CAUGHT"))} )
                    userrole.roles.add(staff).catch(error => { return message.channel.send(error_c(error,"CAUGHT"))} )
                    message.channel.send('Successfully given roles!')      
                }
            }
            if (command === "seniormod") {
                if (!message.member.roles.cache.get(mt)) {
                    message.channel.send('**You need to be management team to use this command.** <@' + message.author.id + '>')
                    return
                } else {
                    const userrole = message.mentions.members.first();
                    userrole.roles.add(seniormod).catch(error => { return message.channel.send(error_c(error,"CAUGHT"))} )
                    userrole.roles.add(staff).catch(error => { return message.channel.send(error_c(error,"CAUGHT"))} )
                    message.channel.send('Successfully given roles!')      
                }
            }
            if (command === "mod") {
                if (!message.member.roles.cache.get(mt)) {
                    message.channel.send('**You need to be management team to use this command.** <@' + message.author.id + '>')
                    return
                } else {
                    const userrole = message.mentions.members.first();
                    userrole.roles.add(mod).catch(error => { return message.channel.send(error_c(error,"CAUGHT"))} )
                    userrole.roles.add(staff).catch(error => { return message.channel.send(error_c(error,"CAUGHT"))} )
                    message.channel.send('Successfully given roles!')      
                }
            }
                if (command === "trialmod") {
                if (!message.member.roles.cache.get(mt)) {
                    message.channel.send('**You need to be management team to use this command.** <@' + message.author.id + '>')
                    return
                } else {
                    const userrole = message.mentions.members.first();
                    userrole.roles.add(trialmod).catch(error => { return message.channel.send(error_c(error,"CAUGHT"))} )
                    userrole.roles.add(staff).catch(error => { return message.channel.send(error_c(error,"CAUGHT"))} )
                    message.channel.send('Successfully given roles!')      
                }
            }
            if (command === "8ball_ban") {
                if (!message.member.roles.cache.get(mt)) {
                    message.channel.send('**You need to be management team to use this command.** <@' + message.author.id + '>')
                    return
                    } else {
                        const userrole = message.mentions.members.first();
                        userrole.roles.add('818852632595791933').catch(error => { return message.channel.send(error_c(error,"CAUGHT"))} )
                        message.channel.send('Successfully banned the user from using the -8ball command!')
                    }
            }
            if (command === "8ball_unban") {
                if (!message.member.roles.cache.get(mt)) {
                    message.channel.send('**You need to be management team to use this command.** <@' + message.author.id + '>')
                    return
                    } else {
                        const userrole = message.mentions.members.first();
                        userrole.roles.remove('818852632595791933').catch(error => { return message.channel.send(error_c(error,"CAUGHT"))} )
                        message.channel.send('Successfully unbanned the user from using the -8ball command!')
                    }
            }
 				if (command === "kick") {
				//  return message.reply('The kick command is currently under development due to code issues.')
				  if (!message.member.permissions.has("KICK_MEMBERS")) {
					  message.channel.send('**You do not have permission to kick users.** <@' + message.author.id + '>')
					  return
				  } else {
					  const member = message.guild.members.cache.get(args[0])
					  if (!member) return message.reply('Please provide a user id.')
					  var text = message.content.split(' ').slice(2).join(' ')
					  if (!text) return message.reply('Please provide a reason.')
					  member.send("You have been KICKED from **MrJordinn Official** for " + text).catch(error =>
                        { return message.channel.send(error_c(error,"CAUGHT"))} )
					  member.kick().catch(error =>
                        { return message.channel.send(error_c(error,"CAUGHT"))} )
					message.channel.send('**Successfully kicked!** `' + member + '` for the reason ' + text)
					  const embed = new Discord.MessageEmbed()
					  .setTitle('User Kicked')
					  .addField('Kicked User', member)
					  .addField('Kicked By', '<@' + message.author.id + '>')
					  .addField('Reason', message.content.split(' ').slice(2).join(' '))
					  .setFooter('If you find any issues with the bot message MrJordinn.')
					  .setColor(0x00104A);
					  message.client.channels.cache.get(logs).send(embed);
				  }
				}
				if (command === "ban") {
					// return message.reply('The ban command is currently under development due to code issues.')
					if (!message.member.permissions.has("BAN_MEMBERS")) {
						message.channel.send('**You do not have permission to ban users.** <@' + message.author.id + '>')
						return
					} else {
						const member = message.guild.members.cache.get(args[0])
						if (!member) return message.reply('Please provide a user id.')
						var text = message.content.split(' ').slice(2).join(' ')
						if (!text) return message.reply('Please provide a reason.')
						member.send("You have been BANNED from **MrJordinn Official** for " + text).catch(error =>
							{ return message.channel.send(error_c(error,"CAUGHT"))} )
						member.ban({reason: text}).catch(error =>
							{ return message.channel.send(error_c(error,"CAUGHT"))} )
						message.channel.send('**Successfully banned!** `' + member + '` for the reason ' + text)
						const embed = new Discord.MessageEmbed()
					  .setTitle('User Banned')
					  .addField('Banned User', member)
					  .addField('Banned By', '<@' + message.author.id + '>')
					  .addField('Reason', message.content.split(' ').slice(2).join(' '))
					  .setFooter('If you find any issues with the bot message MrJordinn.')
					  .setColor(0x00104A);
					  message.client.channels.cache.get(logs).send(embed);
					}
				}
    

                



});
// client.login('ODE4ODY1MTk1NDE3MzM3ODc4.YEeRpA.Iot0hJM5mMXhM6LOa--tPwQ6C_A');
client.login(process.env.TOKEN);

