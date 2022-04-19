let canClick = true;
let fistCard = null;
let secondCard = null;

function Card(index, value) {
    let card = document.createElement('div');
    document.body.appendChild(card);
    card.style.width = "100px";
    card.style.height = "100px";
    card.style.backgroundColor = "orange";
    card.style.position = "absolute";
    card.innerText = index;
    card.style.border = "1px solid blue";
    card.index = index;
    card.value = value;
    card.addEventListener("click", onClickCard.bind(card))
    return card;
}

const cards = [];
for (let index = 0; index < 20; index++) {
    let card = new Card(index, index % 10);
    cards.push(card);
    let col = index % 5;
    let row = Math.floor(index / 5);
    card.style.top = row * 100 + 'px';
    card.style.left = col * 100 + 'px';
}

function onClickCard() {
    let card = this;
    console.log(card.index, card.value);
    if (!canClick) return;

    if (card === fistCard) return;

    if (fistCard === null) {
        fistCard = card;
        // open card
    } else {
        canClick = false;
        secondCard = card;
        // open card
        compareCard(fistCard, secondCard);
    }
}

function compareCard(fistCard, secondCard) {
    if (fistCard.value === secondCard.value) {
        // hide
    } else {
        // close
    }
}