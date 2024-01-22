'use strict';

//function to receive hex numbers
function hex2bin(hex) {
    //handle case where hex is entered using 0x format
    const hexString = hex.startsWith("0x") ? hex.slice(2) : hex;
    return parseInt(hex, 16).toString(2).padStart(8, '0');
}

console.log(hex2bin("0xAA"));
