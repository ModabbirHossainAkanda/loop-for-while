/**
 * TERNARY.... > three parts
 * 
 * condition ? do something when true: do something when false
 */

// const age = 112;

// normal if else

// if(age >= 18){
//     console.log('You can vote')
// }
// else{
//     console.log('Jao baccha ghumai thaako');
// }

// simple ternary
// age >= 18 ? console.log('vote dio') : console.log('Ghumai thako')

let price = 500;
const isLeader = false; 

if(isLeader === true){
    price = 0;
}
else{
    price = price + 100;
}
// console.log(price);

// shortcut: by using ternary
price = isLeader === true ? 0 : price +100;