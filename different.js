// odd numbers
/**
 * ek e jinish vibinno way te kora jai
 */
// first way
// for(let i = 0; i < 20; i++){
//     if(i%2 === 0){
//         console.log(i);
//     }
// }

// second way

// for(let i = 0; i<20; i++){
//     if(i%2 !== 0){
//         console.log(i);
//     }
// }

/**
 * third way
 */

// for(let i = 1; i<20; i+=2){
//     console.log(i);
// }

// let i = 1;
// while(i<20){
//     console.log(i);
//     i+=2;

// }

// for(let i = 1; i <= 30; i++){
//     if(i%5 === 0){
//         console.log(i);
//     }
// }

// for(let i = 1; i<=30; i++){
//     if(i%3 === 0 || i%5 === 0){
//         console.log(i);
//     }
// }

// for(let i = 1; i<=300; i++){
//     if(i%3 === 0 && i%5 === 0){
//         console.log(i);
//     }
// }
/**
 * give me the sum of the numbers from 1 to 20 that are divisble by 3
 */
let total = 0;
for(let i = 1; i<=20; i++){
   if(i % 3 === 0){
    console.log(i);
    total = total + i;
   }
}
console.log(sum);