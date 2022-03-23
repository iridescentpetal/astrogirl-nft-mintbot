import { Contract } from "@ethersproject/contracts";
import provider from "./provider";

import astroAbi from "./abi/astro";

const ASTRO_CONTRACT_ADDR = "0xB21e760e7f74dD3c7b125EF21ba068AbBC8ADBA8";
export const astroContract = new Contract(ASTRO_CONTRACT_ADDR, astroAbi, provider);
