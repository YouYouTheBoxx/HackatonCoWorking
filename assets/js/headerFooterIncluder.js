fetch("./header.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        let header = document.createElement("header");
		header.id = "header";
        header.innerHTML = data;
        document.body.insertAdjacentElement('afterbegin',  header);

        document.querySelector('head').innerHTML += '<link rel="stylesheet" href="../css/header_footer.css">' + '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />';
    });

fetch("./footer.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        let footer = document.createElement("footer");
        footer.innerHTML = data;
        document.body.insertAdjacentElement('beforeend',  footer);
    });