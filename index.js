const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
  GatewayIntentBits.GuildMembers,
  GatewayIntentBits.DirectMessageTyping,
],
});

// Constant variables
const infoPartnership = 'CHANNEL ID';
const partnershipChannel = 'CHANNEL ID';

// ID of the channel where you want to send timed message
const channelId = 'CHANNEL ID';

// Timed message to be sent
const messageToSend = 'timed message';

// DISCORD NODE.JS FUNCTIONS
// Ready event
client.once('ready', () => {
  console.log(`The bot has been started as ${client.user.tag}`);
    
    // Send the first message
  sendMessage();
  
  // Send a message to the selected channel every 2 hours (in ms)
  setInterval(sendMessage, 2 * 60 * 60 * 1000);
});

// Funzione per inviare il messaggio
function sendMessage() {
  const channel = client.channels.cache.get(channelId);

  if (channel) {
    channel.send(messageToSend)
      .then(() => console.log('Message successfully sent!'))
      .catch(console.error);
  } else {
    console.error(`Cannot found channel ID: ${channelId}`);
  }
}


// Simple bot test ping > pong
client.on('messageCreate', (message) => {
  if (message.content.toLowerCase() === 'ping') {
    message.reply('Pong!');
  }
});

client.on('messageCreate', (message) => {
  // Remove case sensitive
  const content = message.content.toLowerCase();

  // Define answers and questions for different cases
  const questionAnswers = [
    {
      questions: [
        'question A',
        'question B',
        'question C',
        // Add any questions here
      ],
      answers: [
        `Hello ${message.author}, this is answer A`,
        `This is answer B`,
        // Add any answers here
      ],
    },
  ];

  // Loop trough blocks of answers and questions
  for (const pair of questionAnswers) {
    for (const question of pair.questions) {
      if (content.includes(question)) {
        // Create a random number to select a random answer from the bot
        const randomIndex = Math.floor(Math.random() * pair.answers.length);

        // Send a random answer selected
        console.log(`Matched question: "${question}"`);
        console.log(`Selected answer: "${pair.answers[randomIndex]}"`);
        message.reply(pair.answers[randomIndex]);
        return;
      }
    }
  }
});

// Start the bot
client.login('YOUR_BOT_TOKEN');