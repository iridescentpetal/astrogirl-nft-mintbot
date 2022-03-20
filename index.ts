require("dotenv").config();

import listenAstroMint from "./lib/eth/listenMint"

async function go() {
  await listenAstroMint();
  setInterval(() => listenAstroMint(), /* 30 seconds =*/ 1000 * 5);
}

go();
