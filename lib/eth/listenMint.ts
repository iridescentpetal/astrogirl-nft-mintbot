import { ASTRO_CONTRACT_ADDR, NULL_ADDRESS, astroContract } from "./contract";

async function listenAstroMint(/*callback: (address: string) => void*/) {
    console.log("Listening to transfer events for Astro Girls!");
    astroContract.on("Transfer", (from, to, tokenId, event) => {
        console.log("Transfer event at", new Date(), "| From:", from, "to:", to);
    })
    
    const filter = astroContract.filters.Transfer(NULL_ADDRESS);
    astroContract.on(filter, (from, to, tokenId, event) => {
        console.log(`Astro Girl #${ tokenId } minted at`, new Date());
    });
}

export default listenAstroMint;