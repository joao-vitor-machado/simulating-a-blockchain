import { createHash } from "crypto";

export function hash(data : any) : string {
    return createHash('sha256').update(JSON.stringify(data)).digest('hex');
}


export function hashValidado({hash, dificuldade = 4, prefixo = '0'} : {
    hash: string,
    dificuldade : number,
    prefixo : string
}) {

    const check = prefixo.repeat(dificuldade);
    return hash.startsWith(check);

}