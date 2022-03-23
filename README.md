# ✨ 🌙 ✨ astrogirl-nft-mintbot ✨ 🌙 ✨

A Discord bot that will listen for [Astro Girl](https://etherscan.io/token/0xb21e760e7f74dd3c7b125ef21ba068abbc8adba8) mint events on the Ethereum chain and publish a message:

<img width="1024" alt="Screen Shot 2022-03-22 at 9 50 05 PM" src="https://user-images.githubusercontent.com/101606918/159605880-1e5f0317-7fcc-4061-a9e6-f65042424639.png">

## Astro Girls Society

- Mint here: https://mint.astrogirls.wtf/
- General info here: https://www.astrogirls.wtf/

I'm not part of the AGS team, just an Astro Girl NFT holder ❤️ #tothe月

## Development details

Mintbot listens to transfer events on the Astro Girls ETH contract and filters specifically for transfers happening from a null address, which indicates a public mint of an Astro Girl. The Astro Girl image is downloaded from IPFS and uploaded to Discord along with the token ID of the Astro Girl.

### Set environment variables

In .env file, set:

```
INFURA_PROJECT=<token>
DISCORD_BOT_TOKEN=<token>
DISCORD_GUILD_ID=<guild_id>
DISCORD_CHANNEL_ID=<channel_id>
```

### Run script locally

```sh
$ npm install
$ npm run start
```

## Notes

This bot has a limited lifespan. She will go to sleep when all 8888 Astro Girls are minted.

