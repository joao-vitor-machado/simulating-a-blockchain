"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blockchain_js_1 = require("./blockchain.js");
const dificuldade = Number(process.argv[2]) || 4;
const blockchain = new blockchain_js_1.Blockchain(dificuldade);
const numBlocos = Number(process.argv[3]) || 10;
let chain = blockchain.chain;
for (let i = 1; i <= numBlocos; i++) {
    const bloco = blockchain.criarBloco(`Bloco ${i}`);
    const mineInfo = blockchain.minerarBloco(bloco);
    chain = blockchain.enviarBloco(mineInfo.blocoMinerado);
}
console.log('--- BLOCKCHAIN ---');
console.log(chain);
