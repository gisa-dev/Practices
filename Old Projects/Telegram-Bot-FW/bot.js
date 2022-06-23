const Telegraf = require('telegraf');

const bot = new Telegraf('1398682764:AAFZh4ZBCrLdTyqdTaJlgGr4UDa8P0pjz64');

bot.start((ctx) => {
  console.log(ctx.from);
  console.log(ctx.chat);
  console.log(ctx.message);
  console.log(ctx.updateSubTypes);
  // ctx.reply(`Welcome ${ctx.from.first_name} ${ctx.from.last_name}`);
  bot.telegram.sendMessage(
    ctx.chat.id,
    `Welcome ${ctx.from.first_name} ${ctx.from.last_name}. Has enviado un ${ctx.updateSubTypes[0]}`
  );
});

bot.help((ctx) => {
  ctx.reply('Help!!');
});

bot.settings((ctx) => {
  ctx.reply('Settings');
});

bot.command(['mycommand', 'Mycommand', 'MYCOMMAND'], (ctx) => {
  ctx.reply('my custom command');
});

bot.hears('computer', (ctx) => {
  ctx.reply('Hey i am selling a computer');
});

// bot.on('text', (ctx) => {
//   ctx.reply('estas texteando');
// });

bot.on('sticker', (ctx) => {
  ctx.reply('ooh un stikers');
});

bot.mention('BotFather', (ctx) => {
  ctx.reply('You mentioned someone');
});

bot.phone('+1 8492201262', (ctx) => {
  ctx.reply('this phone number');
});

bot.hashtag('programming', (ctx) => {
  ctx.reply('hashtag!!!');
});

bot.launch();
