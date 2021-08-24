let  result= true;
let randomNumber = 0;
let NbEssai = 0;
let NbEssaiMax = 10;
let player = 0;


    do{
//'RANDOMNUMBER' recoit le nb aleatoire entre 1 et 100
randomNumber = Math.floor(Math.random() * 100 ) + 1;
console.log(randomNumber);
NbEssai = 0;//demarre la boucle

do {
//condition player= affiche et recupere le nombre entré
player = parseInt(prompt("entrez votre nombre"),10);
NbEssai = NbEssai + 1 ;
if (player === randomNumber){
    result= confirm("bravo, vous avez trouvez! Souhaitez-vous refaire une partie?");
    if (result) {
        //il a gagné, il recommence.
    }
    else {
        //il a gagné mais il s'en va. 
    }
 }
else {
    if (player < randomNumber){ //il n'a pas trouvé le bon numero, mais indication sur le n°
         result = prompt('choisir un nombre superieur. Nb d\'\essai restant '+ (NbEssaiMax-NbEssai)+ ' essais');
    }
    else {
       result = prompt('choisir un nombre inférieur. Nb d\'\essai restant '+ (NbEssaiMax-NbEssai)+ ' essais');
    }
    
    if ( NbEssai == NbEssaiMax){ //si nb d'essai = nb d'essai autorisé,le jeu s'arrete
        result= false;
    }    
}

 }while(result!=false);
    } while(result != false);

