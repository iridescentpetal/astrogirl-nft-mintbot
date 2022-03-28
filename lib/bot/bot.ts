import { Client, Intents, TextChannel } from "discord.js";

interface DiscordParams {
  guildId: string;
  channelId: string;
}

class Bot {
  client: Client;
  token?: string;

  constructor(token?: string) {
    this.client = new Client({ intents: [Intents.FLAGS.GUILDS] });
    this.client.on("debug", console.log);
    this.token = token;
  }

  async init() {
    this.client.login(this.token);
    this.client.once("ready", () => {
      console.log("bot is online");
    });
  }

  async getGuilds() {
    return await this.client.guilds.fetch();
  }

  async post({ discords, tokenId }: { discords: DiscordParams[]; tokenId: string; }) {
    const message = `Astro Girl #${tokenId} was minted!`;
    const guilds = await this.getGuilds();

    discords.map(async (discord) => {
      const guild = guilds.find((guild) => guild?.id === discord.guildId);
      const fetchedGuild = await guild?.fetch();
      console.log(fetchedGuild);

      fetchedGuild?.channels
        .fetch()
        .then((channels) =>
          console.log(`There are ${channels?.size} channels.`)
        )
        .catch(console.error);

      fetchedGuild?.channels
        .fetch(discord.channelId)
        .then((channel) => console.log(`Channel name: ${channel?.name}.`))
        .catch(console.error);

      const channel = await fetchedGuild?.channels.fetch(discord.channelId);
      const fetchedChannel = await channel?.fetch();

      if (fetchedChannel?.isText()) {
        (fetchedChannel as TextChannel).send({
          content: message,
          files: [
            `https://astrogirls.mypinata.cloud/ipfs/QmPZuVJmwtHeTZVXzatQ36dR3k8RzmDcB6DA5BnYnAHXLh/${tokenId}.png`,
          ],
        });
      }
    });
  }
}

export default Bot;
