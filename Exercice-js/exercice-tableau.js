"use strict";


/**                 Tableau
 * 
 * Declare un tableau vide names 
 * Ajouter "vincent", "Paul", et "Arthur" dans le tableau via la methode push
 * 
 * Pour chaque element du tableau
 * 
 * Ajouter a la fin "va a la peche"
 * Afficher chaque element 
 * 
 */


let tableauNames = [];
console.log(tableauNames.push("Vincent","Paul","Arthur"));

tableauNames.forEach(names =>{
    names += "va a la peche ";
console.log(names)
})