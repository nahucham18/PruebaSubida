'use strict';

function BinarioADecimal(num) {
let elevado = 0;
let numElevado = 0;
let numDecimal = 0;

for(let i=num.length-1;i>=0;i--){
    if(num[i]== 1){
        numElevado = Math.pow(2,elevado)
        numDecimal = numDecimal + numElevado
    }
    elevado++;
}
return numDecimal;
}


function DecimalABinario(num) {

    //OPCION 1

    
    let numBinario = '';
    let numeroBinario = '';
    
        do{
            if(num%2 == 0){
                numBinario =+ '0';
                numeroBinario = numeroBinario + '0';
            }else {
                numBinario =+ '1';
                numeroBinario = numeroBinario + '1';
            }
            num = num/2;
            num = Math.floor(num);

        }while(num > 0);
        let numeroBinarioInvertido = '';
        for(let i=numeroBinario.length-1; i>=0; i--){
            numeroBinarioInvertido = numeroBinarioInvertido + numeroBinario[i];
        }
        return numeroBinarioInvertido;

    //OPCION 2 
//     var binary = '';
// while(num>0){
//     binary = (num%2) + binary;
//     num = Math.floor(num/2);
// }
// return binary;
}



module.exports = {
    BinarioADecimal,
    DecimalABinario,
};


