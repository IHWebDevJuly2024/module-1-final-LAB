const bodyElement = document.querySelector("body");
let card = document.createElement("div");
    card.className = "card";
    document.querySelector("body").appendChild(card);
    let image = document.createElement("img");
    image.src = workers[0].photo;
    card.appendChild(image);
    let cardName = document.createElement("h2");
    cardName.textContent = workers[0].name;
    card.appendChild(cardName);
    let cardPosition = document.createElement("h3");
    cardPosition.textContent = workers[0].position;
    card.appendChild(cardPosition);
    let cardMail = document.createElement("p");
    cardPosition.textContent = workers[0].email;
    card.appendChild(cardMail);

    

