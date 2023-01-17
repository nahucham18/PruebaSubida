// let num = '101';
// let elevado = 0;
// let numElevado = 0;
// let numDecimal = 0;
// console.log(num.length);
// for(let i=num.length-1;i>=0;i--){
//     console.log(num[i]);
//     if(num[i]== 1){
//         console.log('Hay un 1');
//         console.log('Esta en la posicion'+i);
//         numElevado = Math.pow(2,elevado)
//         console.log(elevado);
//         console.log(numElevado);
//         numDecimal = numDecimal + numElevado
//     }else {
//         console.log('Hay un 0');
//     }
//     console.log('este es el elevado antes',+elevado)
//     elevado++;
//     console.log('este es el elevado despues',+elevado)
// }

// console.log('El numero decimal de '+num+ ' es '+ numDecimal);

let num = '9';
let numeroDecimal = num;
let div = '0';
let numBinario = '';
let numeroBinario = '';
let i = 0;
    do{
        if(num%2 == 0){
            numBinario =+ '0';
            numeroBinario = numeroBinario + numBinario;
            console.log(numBinario);
            console.log(numeroBinario);
        }else {
            numBinario =+ '1';
            numeroBinario = numeroBinario + numBinario;
            console.log(numBinario);
            console.log(numeroBinario);
        }
        console.log(num);
        num = num/2;
        num = Math.floor(num);
        console.log(num);
        
        console.log(num);
        i++;
    }while(num > 0);
    let numeroBinarioInvertido = '';
    for(let i=numeroBinario.length-1; i>=0; i--){
        numeroBinarioInvertido = numeroBinarioInvertido + numeroBinario[i];
        console.log(numeroBinarioInvertido);
    }
    console.log('El numero binario de '+numeroDecimal+ ' es '+numeroBinarioInvertido)
    console.log(num);

