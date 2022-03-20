require("dotenv").config();

import listenAstroMint from "./lib/eth/listenMint"

async function go() {
  await listenAstroMint();
}

go();
