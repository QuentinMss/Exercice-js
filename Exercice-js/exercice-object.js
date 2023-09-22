"use strict";

/**             OBJECT
 * 
 * Declarer un Objet student avec name , favoriteFood et city 
 * 
 * Recuperer le nombre de caracteres dans chaues proprieter puis les additionner pour obtenir un nombre 
 * 
 * Plusieurs solutions possibles 
 * Object.keys()=> recuperer les proprieter=s 
 * Object.values() => recuperer les valeurs
 * 
 */
let student={
    name:'Nicolas',
    favoriteFood:"Salad",
    city:"Paris",
}
let values=Object.values(student);
let count=values.reduce((acc,value)=>acc+value.length,0)
console.log(count);