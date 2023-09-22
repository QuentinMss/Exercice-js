"use strict";

//          WHILE
/**
 * Declarer une varaible a qui est egale a 3
 * tant que a est plus petit que 9 
 * incremente a de 1
 * si a est egal a 8 on arrete la boucle 
 * si a est egal a 7 on revient au debut de la boucle 
 * on console log(a)
 */

let a3=3;
while(a3<9){a3++
    if(a3==7){
        continue
    }
    if(a3==8){
        break
    }
    console.log(a3);
}
console.log('Jai cassé la boucle au bout de '+a3+" tours");