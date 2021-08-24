
 //math.random pour le nb de 1 à 100; floor pour arrondir 
let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);

// Permet de retenir le nombre du joueur
let response;


do{
    if(response === 0 || isNaN( response)){
    // demande au joueur un nombre 
    response= Number(prompt('#1 Choisis un nombre entre 1 et 100'));
    //console.log(response);
    }
    
    // si le nombre est plus petit
    if(response < randomNumber){
        document.write('<p>Le nombre à trouver est plus grand...</p>');
    }

    // Si le nombre est plus grand
    else if (response > randomNumber) {
        document.write('<p>Le nombre à trouver est plus petit...<p>');
        //document.write('<img src="httpsnbgf;bvfgv">) pour afficher image si bonne réponse trouvée
    }

    response= Number(prompt('#2 Choisis un nombre entre 1 et 100'));

} while(response !== randomNumber);

document.write('Tu a gagné!');
if(confirm('Bravo tu agagné! Veux-tu rejouer?')) {
    //recharge la page en cours
    location.reload();
}