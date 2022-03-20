import { Contract } from "@ethersproject/contracts";
import provider from "./provider";

import astroAbi from "./abi/astro"

export const ASTRO_CONTRACT_ADDR = "0xB21e760e7f74dD3c7b125EF21ba068AbBC8ADBA8";
export const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";
// Concatenate with tokenID and .png suffix to get the image of the Astro Girl
export const ASTRO_GIRL_IMG_PREFIX = "https://gateway.pinata.cloud/ipfs/QmPZuVJmwtHeTZVXzatQ36dR3k8RzmDcB6DA5BnYnAHXLh/";
export const astroContract = new Contract(ASTRO_CONTRACT_ADDR, astroAbi, provider);