// TODO: Fill in logic to post to Twitter.
import { Client, Intents, TextChannel } from "discord.js";

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

  async post(guildId: string, channelId: string, tokenId: string) {
    const message = `AstroGirl #${tokenId} was minted!`;
    const guilds = await this.getGuilds();

    const guild = guilds.find((guild) => guild?.id === guildId);
    const fetchedGuild = await guild?.fetch();
    console.log(fetchedGuild);

    fetchedGuild?.channels
      .fetch()
      .then((channels) => console.log(`There are ${channels?.size} channels.`))
      .catch(console.error);

    fetchedGuild?.channels
      .fetch(channelId)
      .then((channel) => console.log(`Channel name: ${channel?.name}.`))
      .catch(console.error);

    const channel = await fetchedGuild?.channels.fetch(channelId);
    const fetchedChannel = await channel?.fetch();

    if (fetchedChannel?.isText()) {
      (fetchedChannel as TextChannel).send({
        content: message,
        files: [
          `https://gateway.pinata.cloud/ipfs/QmPZuVJmwtHeTZVXzatQ36dR3k8RzmDcB6DA5BnYnAHXLh/${tokenId}.png`,
        ],
      });
    }
  }
}

export default Bot;
