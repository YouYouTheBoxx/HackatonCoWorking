//creation de variables pour les email et mot de passe correspondant.

let adherent = 'adherent@gmail.com';
let administrator = 'administrator@gmail.com';
let adherentPassword = 'adherent';
let administratorPassword = 'administrator';
//recuperation des types input des pages html
let email = document.querySelector('input[name="mail"]');
let password = document.querySelector('input[name="password"]');
//creation de la fonction adhérent, qui permettra apres analyse du mail et password 
//correspondant, ce qui permettra l'acces au site dans son entiereté
function connexionAdherent(){
if (email.value === adherent &&  password.value === adherentPassword) {
   
} else {
    
}

}
//creation de la fonction administrator qui donne acces au site entier 
//plus des fonctions particulieres de modifications de site(photo par exmeple)
function connexionAdministrator(){
if (email.value === administrator && password.value === administratorPassword) {
    
} else {
    
}
}
//creation de la fonction visiteur. Fonctionnement de base du site en mode restreint, acces limité
function connexionVisitor(){
if ((email.value !== adherent ||  password.value !== adherentPassword) || (email.value !== administrator || password.value !== administratorPassword)) {
    
} else {
  connexionAdherent();
  connexionAdministrator();  
}
}