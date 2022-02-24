function setTitle(){
    let bigTitle = document.querySelector('.bigTitle');

    bigTitle.innerHTML = document.title;
}

document.addEventListener('load', (loadEvent) => {
    setTimeout(setTitle, 2000);
});