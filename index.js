const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });

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

client.on('ready', () => {
    console.log('Bot is now up and running!');
    client.user.setActivity("MrJordinn || Prefix -", {
        type: "LISTENING",
    })
})
client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(channel => channel.name === "welcome");
    if (!channel) return;
    channel.send(`Welcome to **MrJordinn Official!** ${member}`)
});
client.on('message', (message) => {

        if (message.content.toLowerCase().startsWith(`${prefix}test`)) {
            message.reply('I am working fine!')
        }

    if (message.content.toLowerCase().startsWith(`${prefix}8ball`)) {
            var rand = ['Yes.', 'No.', 'Why are you even trying?', 'What do you think? NO!', 'Maybe...', 'Never.', 'Yep.', 'Uhhhhh nah.', 'Hell no!', 'Yeah totally!', 'Idk about that one.', "I'm gonna have to say no to that one...", 'Probably not', 'Sorry but.... no', "Don't go and cry to your mommy but.... it's a no from me.", 'Of course!', 'Ooooo yeah', "It's a yes from me.", 'HELL YEAH!', 'ha ha ha...... yeah', 'Imma just say yeah', 'frick yeah', 'nononono', 'Mhm', 'yes yes yes'];
            var yesOrNo = rand[Math.floor(Math.random()*rand.length)];
            message.channel.send(yesOrNo + '\n \n **-Response to 8ball requested by <@' + message.author.id + '>**');
            }

            if (message.content.toLowerCase().startsWith(`${prefix}8ball_y`)) {
                if (message.author.id !== "356919501322846220") {  // || message.author.id !=="545431527253606412") { //ifstart
                message.channel.send('**Only the epic MrJordinn can use this 8ball command.** <@' + message.author.id + '>')
                return
                } else {
                var rand = ['Yes.', 'Yas.', 'Mhm', 'Yep.', 'Yeah totally!', 'Of course!', 'Ooooo yeah', "It's a yes from me.", 'HELL YEAH!', 'ha ha ha...... yeah', 'Imma just say yeah', 'frick yeah', 'yes yes yes'];
                var yesOrNo = rand[Math.floor(Math.random()*rand.length)];
                message.channel.send(yesOrNo + '\n \n **-Response to 8ball_y requested by <@' + message.author.id + '>**');
                }
            }

            if (message.content.toLowerCase().startsWith(`${prefix}superadmin`)) {
                if (!message.member.roles.cache.get(mt)) {
                    message.channel.send('**You need to be management team to use this command.** <@' + message.author.id + '>')
                    return
                } else {
                    const userrole = message.mentions.members.first();
                    userrole.roles.add(superadmin).catch(err => {message.channel.send(err)});
                    userrole.roles.add(staff).catch(err => {message.channel.send(err)});
                    userrole.roles.add(god1).catch(err => {message.channel.send(err)});
                    message.channel.send('Successfully given roles!')      
                }
            }
            if (message.content.toLowerCase().startsWith(`${prefix}senioradmin`)) {
                if (!message.member.roles.cache.get(mt)) {
                    message.channel.send('**You need to be management team to use this command.** <@' + message.author.id + '>')
                    return
                } else {
                    const userrole = message.mentions.members.first();
                    userrole.roles.add(senioradmin).catch(err => {message.channel.send(err)});
                    userrole.roles.add(staff).catch(err => {message.channel.send(err)});
                    message.channel.send('Successfully given roles!')      
                }
            }
            if (message.content.toLowerCase().startsWith(`${prefix}admin`)) {
                if (!message.member.roles.cache.get(mt)) {
                    message.channel.send('**You need to be management team to use this command.** <@' + message.author.id + '>')
                    return
                } else {
                    const userrole = message.mentions.members.first();
                    userrole.roles.add(admin).catch(err => {message.channel.send(err)});
                    userrole.roles.add(staff).catch(err => {message.channel.send(err)});
                    message.channel.send('Successfully given roles!')      
                }
            }
            if (message.content.toLowerCase().startsWith(`${prefix}seniormod`)) {
                if (!message.member.roles.cache.get(mt)) {
                    message.channel.send('**You need to be management team to use this command.** <@' + message.author.id + '>')
                    return
                } else {
                    const userrole = message.mentions.members.first();
                    userrole.roles.add(seniormod).catch(err => {message.channel.send(err)});
                    userrole.roles.add(staff).catch(err => {message.channel.send(err)});
                    message.channel.send('Successfully given roles!')      
                }
            }
            if (message.content.toLowerCase().startsWith(`${prefix}mod`)) {
                if (!message.member.roles.cache.get(mt)) {
                    message.channel.send('**You need to be management team to use this command.** <@' + message.author.id + '>')
                    return
                } else {
                    const userrole = message.mentions.members.first();
                    userrole.roles.add(mod).catch(err => {message.channel.send(err)});
                    userrole.roles.add(staff).catch(err => {message.channel.send(err)});
                    message.channel.send('Successfully given roles!')      
                }
            }
            if (message.content.toLowerCase().startsWith(`${prefix}trialmod`)) {
                if (!message.member.roles.cache.get(mt)) {
                    message.channel.send('**You need to be management team to use this command.** <@' + message.author.id + '>')
                    return
                } else {
                    const userrole = message.mentions.members.first();
                    userrole.roles.add(trialmod).catch(err => {message.channel.send(err)});
                    userrole.roles.add(staff).catch(err => {message.channel.send(err)});
                    message.channel.send('Successfully given roles!')      
                }
            }
                



});
// client.login('ODE4ODY1MTk1NDE3MzM3ODc4.YEeRpA.Iot0hJM5mMXhM6LOa--tPwQ6C_A');
client.login(process.env.TOKEN);