//creation de variable pour indiquer où il doit se passe quelque chose
let send = document.getElementById('submit_button');
//ecouteur d'eveneent sur la variable
send.addEventListener('click',function(){ 
//si evenement validé alors message d alerte avec texte correspond
     alert("Votre message a bien été envoyé avec succés");
});
