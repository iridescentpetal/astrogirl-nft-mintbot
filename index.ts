require("dotenv").config();

import listenAstroMint from "./lib/eth/listenMint"
import Bot from "./lib/bot/bot"

async function go() {
  const bot = new Bot(process.env.DISCORD_BOT_TOKEN);
  const mintBot = await bot.init();
  await listenAstroMint({'bot': mintBot, 'guildId': '907379771711815731', 'channelId': '907379771711815734'});
}

go();