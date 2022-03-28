import { NULL_ADDRESS, astroContract } from "./contract";
import Bot from "../bot/bot";

interface Params {
  discordBot: Bot;
  discords: { guildId: string; channelId: string }[];
}

async function listenAstroMint({ discordBot, discords }: Params) {
  console.log("Listening to transfer events for Astro Girls!");
  astroContract.on("Transfer", (from, to, tokenId, event) => {
    console.log("Transfer event at", new Date(), "| From:", from, "to:", to);
  });

  const filter = astroContract.filters.Transfer(NULL_ADDRESS);
  astroContract.on(filter, async (from, to, tokenId, event) => {
    console.log(`Astro Girl #${tokenId} minted at`, new Date());
    await discordBot.post({ discords, tokenId: `${tokenId}` });
  });
}

export default listenAstroMint;
