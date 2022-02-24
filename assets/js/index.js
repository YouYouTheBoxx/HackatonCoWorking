let compteur = 0;
let timer, elements, slides, slideWidth;

window.onload = () => {
    const diapo = document.querySelector(".diapo");
    elements = document.querySelector(".elements");

    let firstImage = elements.firstElementChild.cloneNode(true);
    elements.appendChild(firstImage);

    slides = Array.from(elements.children);
    slideWidth = diapo.getBoundingClientRect().width;

    let next = document.querySelector("#nav-droite");
    let prev = document.querySelector("#nav-gauche");

    next.addEventListener("click", slideNext);
    prev.addEventListener("click", slidePrev);


}
function slideNext() {
    compteur++;
    elements.style.transition = "1s linear";
    let decal = -slideWidth * compteur;
    elements.style.transform = `translateX(${decal}px)`;

    setTimeout(function () {
        if (compteur >= slides.length - 1) {
            compteur = 0;
            elements.style.transition = "unset";
            elements.style.transform = "translateX(0)";
        }

    }, 1000);

}
function slidePrev() {
    compteur--;
    elements.style.transition = "1s linear";


    if (compteur < 0) {
        compteur = slides.length - 1;
        let decal = -slideWidth * compteur;
        elements.style.transition = "unset";
        elements.style.transform = `translateX(${decal}px)`;
        setTimeout(slidePrev, 1);

    }
    let decal = -slideWidth * compteur;
    elements.style.transform = `translateX(${decal}px)`;
}