//creation de variables pour les email et mot de passe correspondant.

let adherent = 'adherent@gmail.com';
let administrator = 'administrator@gmail.com';
let adherentPassword = 'adherent';
let administratorPassword = 'administrator';
//recuperation des types input des pages html
let email = document.querySelector('input[name="mail"]');
let password = document.querySelector('input[name="password"]');


function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function previous() {   
  window.location.href = "http://www.inewtek.fr/hackaton/HackatonCoWorking";      
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

//creation de la fonction adhérent, qui permettra apres analyse du mail et password 
//correspondant, ce qui permettra l'acces au site dans son entiereté
function connexionAdherent(){
  if (email.value === adherent &&  password.value === adherentPassword) {
    setCookie("usertype","adherent",1);
    previous();
  } 
}
//creation de la fonction administrator qui donne acces au site entier 
//plus des fonctions particulieres de modifications de site(photo par exmeple)
function connexionAdministrator(){
  if (email.value === administrator && password.value === administratorPassword) {
    setCookie("usertype","administrator",1);
    previous();
  } 
}
//creation de la fonction visiteur. Fonctionnement de base du site en mode restreint, acces limité
function connexionVisitor(){
	  if (email.value !== adherent ||  password.value !== adherentPassword){
		if(email.value !== administrator || password.value !== administratorPassword){
		  setCookie("usertype","visitor",1);
		  previous();
		} else {
		  connexionAdministrator(); 
		}
	  } else {
		connexionAdherent();
	  }
}

let connectBtn = document.querySelector('#connectBtn');
connectBtn.addEventListener('click',(event) => {
  connexionVisitor();
});