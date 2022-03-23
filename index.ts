require("dotenv").config();

import listenAstroMint from "./lib/eth/listenMint"
import Bot from "./lib/bot/bot"

async function go() {
  const bot = new Bot(process.env.DISCORD_BOT_TOKEN);
  await bot.init();
  await listenAstroMint({'discordBot': bot, 'guildId': '907379771711815731', 'channelId': '907379771711815734'});
}

go();