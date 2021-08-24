let  result= true;
let randomNumber = 0;
let NbEssai = 0;
let NbEssaiMax = 10;
let player = 0;


do{
//'RANDOMNUMBER' recoit le nb aléatoire entre 1 et 100
randomNumber = Math.floor(Math.random() * 100 ) + 1;
console.log(randomNumber); //affiche le résultat dans la console
NbEssai = 0 ;
do {
//condition player= affiche et récupère le nombre entré
player = parseInt(prompt("entrez votre nombre"),10);
NbEssai = NbEssai + 1 ;
if (player === randomNumber){ //strictement égal 
    result= confirm("bravo, vous avez trouvez ! Souhaitez-vous refaire une partie?");
    if (result) {
        //il a gagné, il recommence.
    }
    else {
        //il a gagné mais il s'en va.
    }
}
else {
    if (player < randomNumber){ //player est inférieur à randomNuber(nb aléatoire)
        document.write('choisir un nombre superieur. Il vous reste '+ (NbEssaiMax-NbEssai)+ ' essais');
    }
    else {
        document.write (' choisir un nombre inférieur. Il vous reste '+ (NbEssaiMax-NbEssai)+ ' essais');
    }
    //il n'a pas trouvé le bon numero, mais donne une indication sur le n°
    if ( NbEssai == NbEssaiMax){ //si nb d'essai = nb d'essai autorisé,le jeu s'arrete
    result= false;
}
    
}

 }while(result!=false);
 alert ( "le bon nombre était "+randomNumber);
    } while(result != false);

