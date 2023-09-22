"use strict";

/**         Fonction
 * 
 * 
 * Declarer trois variables a="jean" et b="paul" et result
 * 
 * Declarer une fonction checkName(qui possede 2 parametres) qui verifie si les deux noms sont identique 
 * 
 * console log le result
 * 
 */

let a4 = "Jean";
let b4 = "Paul";
let result = checkName (a4 , b4)
function checkName(name1, name2){
    if(name1===name2){
        return true
    }else{
        return false
    }
}
console.log(result);