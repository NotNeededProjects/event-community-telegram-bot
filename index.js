const TelegramBot = require('node-telegram-bot-api');
const config = require('./config.js');
const util = require('./util.js');

const bot = new TelegramBot(config.TelegramBotToken, {polling: true});
console.log(`Test Bot started, ${config.TelegramBotUri}`)

bot.on('message', (msg) => {
	const chatId = msg.chat.id;
	const message = msg.text.toString();
	
	if (message.includes(config.TelegramBotName)) {
		let links = util.ParseLinksInText(message)
		bot.sendMessage(chatId, `Okey, I added links. ${links}`)
	}
});

// Error Handling
bot.on('polling_error', (error) => {
	console.log("Polling Error")
	console.log(error)
});