import { ASTRO_CONTRACT_ADDR, NULL_ADDRESS, astroContract } from "./contract";

async function listenAstroMint(/*callback: (address: string) => void*/) {
    console.log("Listening for mint events for new Astro Girls!");
    astroContract.on("Transfer", (from, to, tokenId, event) => {
        console.log("Transfer event at", new Date());
        console.log("From address:", from, "To address:", to);
        console.log("TokenId:", tokenId);

        // Janky if statement to mimic filtering.
        if (from == NULL_ADDRESS) {
            console.log(`Mint event, Astro Girl #${ tokenId } minted.`);
        }
    })
    
    const filter = astroContract.filters.Transfer(NULL_ADDRESS);
    
    astroContract.on(filter, (from, to, tokenId, event) => {
        console.log(`Mint event, Astro Girl #${ tokenId } minted.`);
        console.log("Minted at ", new Date());
    });
}

export default listenAstroMint;