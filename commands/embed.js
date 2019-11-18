// at the top of your file
const { RichEmbed } = require('discord.js');

module.exports = {
	name: 'embed-test',
	description: 'Embed test fo madamnazar.io',
	execute(message, args) {
    // inside a command, event listener, etc.
    const test = new RichEmbed()
      .setColor('#f30b03')
      .setTitle('Some title')
      .setURL('https://madamnazar.io/')
      .setAuthor('Some name', 'https://pbs.twimg.com/profile_images/1182324129296506880/gBjY7ch-_400x400.jpg', 'https://madamnazar.io/')
      .setDescription('Some description here')
      .setThumbnail('https://pbs.twimg.com/profile_images/1182324129296506880/gBjY7ch-_400x400.jpg')
      .addField('Regular field title', 'Some value here')
      .addBlankField()
      .addField('Inline field title', 'Some value here', true)
      .addField('Inline field title', 'Some value here', true)
      .addField('Inline field title', 'Some value here', true)
      .setImage('https://pbs.twimg.com/profile_images/1182324129296506880/gBjY7ch-_400x400.jpg')
      .setTimestamp()
      .setFooter('Some footer text here', 'https://pbs.twimg.com/profile_images/1182324129296506880/gBjY7ch-_400x400.jpg');

    message.channel.send(test);   
	}
};