"use strict";

class personnage {
    constructor(nom, pointsDeVie, probabiliteAttaque, probabiliteContreAttaque, degats) { //introduit les differentes actions des personnages
        this.nom = nom;
        this.pointsDeVie = pointsDeVie;
        this.probabiliteAttaque = probabiliteAttaque;
        this.probabiliteContreAttaque = probabiliteContreAttaque;
        this.degats = degats;
    }

    attaquer(cible) {   //defini aléatoirement les attaques
        if (Math.random() < this.probabiliteAttaque) {
            console.log(`${this.nom} attaque ${cible.nom} et inflige ${this.degats} points de dégâts.`);
            cible.encaisserDegats(this.degats);
        } else {
            console.log(`${this.nom} rate son attaque contre ${cible.nom}.`);
        }
    }

    encaisserDegats(degats) {  //ce que subissent les personnages suite aux attaques
        if (Math.random() < this.probabiliteContreAttaque) {
            console.log(`${this.nom} encaisse ${degats} points de dégâts.`);
            this.pointsDeVie -= degats; 
        }
        if (this.pointsDeVie <= 0) {
            console.log(`${this.nom} est vaincu.`);
        }
    }
}

let jason = new personnage("Jason", 100, 0.8, 0.5, 10);  //introduit le tueur 
let noms = ["Nerd", "Sportif", "Blonde", "Le beau gosse", "La Waifu"];  //introduit les survivants

let survivant = new personnage(noms[Math.floor(Math.random() * noms.length)], 100, 0.7, 0.4, 15); //permet de selectionner un nom aleatoirement dans la tableau

let tour = 1;
while (jason.pointsDeVie > 0 && survivant.pointsDeVie > 0) {  //boucle faisant défilé les actions jusqu'a ce qu'il y est un gagnant 
    console.log(`Tour ${tour}:`);

    survivant.attaquer(jason);

    if (jason.pointsDeVie <= 0) {
        console.log(`${survivant.nom} a vaincu Jason !`); //si jason a 0 pv survivant gagnat
        break;
    }
    jason.attaquer(survivant);

    if (survivant.pointsDeVie <= 0) {   //si survivant a 0 pv jason gagnat
        console.log(`${jason.nom} a vaincu les survivants !`);
        break;
    }

    console.log(`${survivant.nom} : ${survivant.pointsDeVie} points de vie`);// pv restant a chaque tout
    console.log(`${jason.nom} : ${jason.pointsDeVie} points de vie`);
    tour++;
}

if (survivant.pointsDeVie <= 0) {
    console.log("Les survivants ont été vaincus par Jason. Jason gagne !");//message de victoire quand 0 pv contre l'adversaire
} else if (jason.pointsDeVie <= 0) {
    console.log("Jason a été vaincu par les survivants ! Les survivants gagnent !");
}




/* au tout début ca ne fonctionnait pas le code a cause de 2 erreurs:   j'avais mis une majuscule au J de jason dans "let jason = ne personnage" ligne 32
mais aussi a cause d'une minuscule au m de Math à la ligne 13 pour "Math.random.
je n'ai également pas reussi a faire un sorte qu'a chaque tour se soit un survivant différent.*/