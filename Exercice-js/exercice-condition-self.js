"use strict";

/**           CONDITION
 * declarer trois variable a=4,b=4,c=3
 * 
 * a sera l expression de reference 
 * si a est egal a b alor faire un console log('egal à b')
 * 
 * si a est egal a c alors faire un console log('egal à c')
 * 
 * par defaut il y a un console log("egal a rien")
 */

let a = 4;     //les 3 let composent les les trois variables et sont des type number
let b = 4;
let c = 3;

switch (a) {                            //donc a expression de reference 
    case b :
        console.log("Egal a b");
        break;
        
    case c :
        console.log("Egal a c");
        break;
        default :
        console.log("Egal a rien");
}
