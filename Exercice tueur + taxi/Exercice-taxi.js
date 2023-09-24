"use strict";

let santeMentale = 15; //la santé mentale du passager (points de vie)
let Essais = 0; //le compteur d'essai

let musique1 = "Anissa-Wejdene"; //les différentes musique qui seront jouer dans le taxi
let musique2 = "Vibe-Cookie Kawaii";
let musique3 = "Stuck in the middle with you-Stealers Wheel";
let musique4 = "Paint the town red-Doja Cat";
let musique5 = "Spit in my face-Thxsomch";

function choisirPorte() {   //permet de demarrer le compteur d'essai
  Essais++; //permet de toujours d'additionner les essais jusqu'a la folie du passager ou bien d'arriver chez lui avec les 30 essaies
  
  const porteChoisie = Math.floor(Math.random() * 2) + 1; //permet de choisir aleatoirement la porte 1 ou la porte 2

  
  if (porteChoisie === 1) {
    santeMentale -= 1; // porte 1 qui baisse la santé mentale de 1
  } else if (porteChoisie === 2) {
    santeMentale += 0; // porte 2 qui ne change pas la santé mentale
  } }


while (santeMentale > 0 && Essais < 30) { //defini la limite d'essaie a 30
  const porte = choisirPorte(); 
  console.log(`Le joueur a choisi la porte ${porte}. Santé mentale actuelle : ${santeMentale}`); 
}

if (santeMentale <= 0) {
  console.log("Le joueur est devenu fou."); 
  alert("Le passager est devenu fou"); // si la santé mentale est a 0 une alert s'affiche pour dire qu'on perdu
} else {
  console.log("Le joueur a pu rentrer chez lui : " + santeMentale);
  alert("Le passager a pu rentrer chez lui"); // si le passager a garder au moins 1 de santé mentale au bout des 30 feux dans ce cas une alert s'affiche nous disant que c'est gagné
}


/* j'ai essayé plusieurs fois de trouver le probleme mais je n'ai pas réussi a trouver ou etait la ou les erreurs*/




