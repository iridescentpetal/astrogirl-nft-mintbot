import { ASTRO_CONTRACT_ADDR,  astroContract } from "./contract";

async function listenAstroMint(/*callback: (address: string) => void*/) {
    console.log("Listening for mint events for new Astro Girls!");
    astroContract.on("Transfer", (from, to, tokenId, event) => {
        console.log("Is this working?")
    })
    
    const filter = astroContract.filters.Transfer(ASTRO_CONTRACT_ADDR, null);
    
    astroContract.on(filter, (from, to, tokenId, event) => {
        console.log(`Mint event, Astro Girl #${ tokenId } minted by wallet ${ to }.`);
    });
}

export default listenAstroMint;