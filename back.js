const {Bot} = require("grammy")

const bot =new Bot("6003929168:AAG8Oo4kghz_KxJAvky-sUG_PTgS8ns79X0")


bot.command("start" , (ctx)=>ctx.reply("welcome")) 


bot.on("message" , (ctx)=>ctx.reply('salom'))


bot.start() 