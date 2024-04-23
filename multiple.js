const salary = 21001;
const isBCS = true;
const height = 78;
const hasCar = false;

// if(salary > 20000 && height > 66){
//     console.log('Su ... patro');
// }
// else{
//     console.log('Onno patro khuji');
// }

if(salary > 25000 || height > 72){
    console.log('Eso baba kobul');
}
else{
    console.log('vaag tui mokbul');
}


/**
 * more and more condition
 */
if(salary > 25000 || height > 72 || isBCS == true){
    console.log('Eso baba kobul');
}
else{
    console.log('vaag tui mokbul');
}

/**
 * more and more condition
 */
if(salary > 25000 && height > 72 && isBCS == true){
    console.log('Eso baba kobul');
}
else{
    console.log('vaag tui mokbul');
}

/**
 * complex conditions............
 */

if((salary > 25000 && hasCar == true)  || isBCS == true){
    console.log('tomar 14 ghosti raji');
}



if((salary > 25000 || hasCar == true)  && isBCS == true){
    console.log('tomar 14 ghosti raji');
}