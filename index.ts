require("dotenv").config();

import listenAstroMint from "./lib/eth/listenMint"
import downloadImage from "./lib/bot/downloadAstrogirl"

async function go() {
  await listenAstroMint();
}

go();