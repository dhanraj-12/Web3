const crypto = require("crypto");

const input = "100xDevs";
const hash = crypto.createHash('sha256').update(input).digest('hex');

console.log(hash);


/*What if I ask you the following question — Give me an input string that outputs a 
SHA-256 hash that starts with 00000 . How will you do it? */


let i = Number.MIN_VALUE;
while(i<Number.MAX_VALUE) {
    const input = "100xDevs" + i.toString();
    const has = crypto.createHash('sha256').update(input).digest('hex');
    if(has.substring(0,8) == "00000000") {
        console.log(i);
        break;
    }
    i++;
}  
    