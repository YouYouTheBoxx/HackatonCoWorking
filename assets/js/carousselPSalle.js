let myMiniSliders = document.querySelectorAll('.salleMiniSlide');
let currentMiniSlider = document.querySelector('.miniSlide.activeMiniSlider');

function carouselSlideDown(){
    let salleSliders = document.querySelectorAll('.salleSlide');
    let currentSlider = document.querySelector('.salleSlide:not(.salleNoDisplay)');

    if(currentSlider !== null && currentSlider.nextElementSibling !== null && currentSlider.nextElementSibling.classList.contains('salleSlide')){
        currentSlider.classList.add('salleNoDisplay');
        currentSlider.nextElementSibling.classList.remove('salleNoDisplay');

        currentSlider = document.querySelector('.salleSlide:not(.salleNoDisplay)');
    } else {
        currentSlider.classList.add('salleNoDisplay');
        salleSliders[0].classList.remove('salleNoDisplay');

        currentSlider = document.querySelector('.Slide:not(.salleNoDisplay)');
    }
}

function carouselSlideUp(){
    let salleSliders = document.querySelectorAll('.salleSlide');
    let currentSlider = document.querySelector('.salleSlide:not(.salleNoDisplay)');

    if(currentSlider !== null && currentSlider.previousElementSibling !== null && currentSlider.previousElementSibling.classList.contains('salleSlide')){
        currentSlider.classList.add('salleNoDisplay');
        currentSlider.previousElementSibling.classList.remove('salleNoDisplay');

        currentSlider = document.querySelector('.salleSlide:not(.salleNoDisplay)');
    } else {
        currentSlider.classList.add('salleNoDisplay');
        salleSliders[myMiniSliders.length - 1].classList.remove('salleNoDisplay');

        currentSlider = document.querySelector('.Slide:not(.salleNoDisplay)');
    }
}

function miniCarouselSlideDown(){
    if(currentMiniSlider.parentElement.nextElementSibling !== null){
        currentMiniSlider.classList.remove('activeMiniSlider');
        currentMiniSlider.parentElement.nextElementSibling.querySelector('.miniSlide').classList.add('activeMiniSlider');

        currentMiniSlider = document.querySelector('.miniSlide.activeMiniSlider');
    } else {
        currentMiniSlider.classList.remove('activeMiniSlider');
        myMiniSliders[0].querySelector('.miniSlide').classList.add('activeMiniSlider');

        currentMiniSlider = document.querySelector('.miniSlide.activeMiniSlider');
    }
}

function miniCarouselSlideUp(){
    if(currentMiniSlider.parentElement.previousElementSibling !== null){
        currentMiniSlider.classList.remove('activeMiniSlider');
        currentMiniSlider.parentElement.previousElementSibling.querySelector('.miniSlide').classList.add('activeMiniSlider');

        currentMiniSlider = document.querySelector('.miniSlide.activeMiniSlider');
    } else {
        currentMiniSlider.classList.remove('activeMiniSlider');
        myMiniSliders[myMiniSliders.length - 1].querySelector('.miniSlide').classList.add('activeMiniSlider');

        currentMiniSlider = document.querySelector('.miniSlide.activeMiniSlider');
    }
}

myMiniSliders.forEach((element) => {
    element.addEventListener('animationend', (event) => {
        miniCarouselSlideDown();
        carouselSlideDown();
    });
});

let rightBtnCarousel = document.querySelector('.rightBtnCarousel');
rightBtnCarousel.addEventListener('click', (event) => {
    miniCarouselSlideDown();
    carouselSlideDown();
})

let leftBtnCarousel = document.querySelector('.leftBtnCarousel');
leftBtnCarousel.addEventListener('click', (event) => {
    miniCarouselSlideUp();
    carouselSlideUp();
})

let allReservationsBtn = document.querySelectorAll('.btnReservation.book');
let agendaContainer = document.querySelector('.agendaContainer');

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

for(let i = 0; i < allReservationsBtn.length; i++){
    allReservationsBtn[i].addEventListener('click', (event) => {
        let usertype = getCookie("usertype");
        if(usertype === "adherent" || usertype === "administrator"){
            if(agendaContainer.classList.contains('agendaContainerNoDisplay')){
                agendaContainer.classList.remove('agendaContainerNoDisplay');
            }
            let agenda = document.querySelector('#agx' + i);
            console.log(agenda);
            if(agenda !== null){
                let currentAgenda = document.querySelector('#agx' + i + ':not(.agendaNoDisplay)');
                if(currentAgenda !== null){
                    currentAgenda.classList.add('agendaNoDisplay');
                }
                agenda.classList.remove('agendaNoDisplay');
            }
        }
        else {
            let errorAdherent = document.querySelector('.errorNoAdherent');
            errorAdherent.style.display = "flex";
        }
    });
}