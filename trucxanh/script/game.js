import { Card } from "./components/Card.js";
import { Score } from "./components/Score.js";
import { Label } from "./core/Label.js";
import { Node } from "./core/Node.js";
import { Sprite } from "./core/Sprite.js";


class Game extends Node {
    constructor() {
        super();
        this.canClick = true;
        this.fistCard = null;
        this.secondCard = null;
        this._init();
    }
    _init() {
        this.elm.style.backgroundImage = "url(../trucxanh/images/trucxanh_bg.jpg)";
        this.elm.style.top = "20%";
        this.elm.style.left = "25%";
        this.width = 800;
        this.height = 600;
        this._createScore();
        this._createCards();
       
    }
    _createCards() {
        let cards = [];
        for (let index = 0; index < 20; index++) {
            let card = new Card(index);

            cards.push(card);
            this.shuffleCards(cards);
            let col = index % 5;
            let row = Math.floor(index / 5);
            card.setValue(index % 10);
            card.elm.style.top = row * 120 + 'px';
            card.elm.style.left = col * 120 + 'px';
            this.addChild(this.shuffleCards(card));
            card.elm.addEventListener("click", this.onClickCard.bind(this, card));


        }
        console.log(cards);
    }

    _createScore() {
        this.score = new Score();
        this.score.score =100;
        this.addChild(this.score);
    }
    shuffleCards(array) {
        let counter = array.length;
        while (counter > 0) {
          let index = Math.floor(Math.random() * counter);
          counter--;
          let temp = array[counter];
          array[counter] = array[index];
          array[index] = temp;
        }
        return array;
      }

    onClickCard(card) {
        //console.log(card.index, card.value);
        if (!this.canClick) return;

        if (card === this.fistCard) return;

        if (this.fistCard === null) {
            this.fistCard = card;
            // open card
            this.fistCard.open();
            console.log('first01', this.fistCard.value, this.fistCard.index);
            
        } else {
            this.canClick = false;
            this.secondCard = card;
            // open card
            this.secondCard.open();
            console.log('first02', this.secondCard.value, this.secondCard.index);
            setTimeout(()=>{this.compareCard()},1000);
        }

    }
    compareCard() {
        if (this.fistCard.value === this.secondCard.value) {

            // hide
            alert("hide card");
            
            this.fistCard.hide();
            this.secondCard.hide();
        } else {

            this.fistCard.close();
            this.secondCard.close();
            alert("close card");

        }
        this.canClick = true;
        this.fistCard = null;
        this.secondCard = null;
    }
    resetGame() {

    }

}

// create background
let game = new Game();

document.body.appendChild(game.elm);




