const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config()

// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.TELEGRAM_TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message
  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"
  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Welcome", {
  "reply_markup": {
      "keyboard": [["/sendpic", "/echo Sth"],   ["Hi"], ["I'm robot"]]
      }
  });
  
  });
  
bot.onText(/\/sendpic/, (msg) => {
  bot.sendMessage(msg.chat.id, "Look at it!");
  bot.sendPhoto(msg.chat.id,"./Island.jpg", {caption : "Wanna go there? \nSend money to: "} );
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  var Hi = "hi";
  if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
    Hello(msg);
    //bot.sendPhoto(msg.chat.id, photo, { caption: "Hello  " + msg.from.first_name });
  }
  var robot = "I'm robot";
  if (msg.text.indexOf(robot) === 0) {
    bot.sendMessage(msg.chat.id, "Yes and you live in the matrix!");
  }
  // send a message to the chat acknowledging receipt of their message
  //bot.sendMessage(chatId, 'Received your message, text more!!!');
});

async function Hello(msg) {
  const photo = await bot.getUserProfilePhotos(msg.from.id);
  const file_id = photo.photos[0][0].file_id;
  bot.sendPhoto(msg.chat.id,file_id, { caption: "Hello  " + msg.from.first_name });
}