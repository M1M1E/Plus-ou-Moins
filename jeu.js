    let  result= true;
    let randomNumber = 0;
       
        do{
    //'RANDOMNUMBER' recoit le nb aleatoire entre 1 et 100
    randomNumber = Math.floor(Math.random() * 100 ) + 1;
    console.log(randomNumber);
    do {
    //condition player= affiche et recupere le nombre entré
    let player = parseInt(prompt("entrez votre nombre"),10);
    
    if (player === randomNumber){
        result= confirm("bravo, vous avez trouvez! Souhaitez-vous refaire une partie?");
        if (result) {
            //il a gagné, il recommence.
        }
        else {
            //il a gagné mais il s'en va. (boucle de repetition)
        }
     }
    else {
        if (player < randomNumber){
            document.write('choisir un nombre superieur');
        }
        else {
            document.write ('choisir un nombre inférieur');
        }
        //il n'a pas trouvé le bon numero, mais indication sur le n°
        
        }

     }while(result!=false);
        } while(result != false);

