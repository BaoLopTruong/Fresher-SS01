import { Card } from "./components/Card.js";
import { Label } from "./core/Label.js";
import { Node } from "./core/Node.js";
import { Sprite } from "./core/Sprite.js";

let canClick = true;
let fistCard = null;
let secondCard = null;
class Game extends Node {
    constructor() {
        super();
        this._init();
    }
    _init() {
        this._createCards();
        this._createScore();
    }
    _createCards() {
        this.elm.style.backgroundImage = "url(../trucxanh/images/trucxanh_bg.jpg)";
        this.elm.style.top = "20%";
        this.elm.style.left = "25%";
        this.width = 800;
        this.height = 600;

        let cards = [];
        for (let index = 0; index < 20; index++) {
            let card = new Card(index);
        
            cards.push(card);
            let col = index % 5;
            let row = Math.floor(index / 5);
            card.setValue(index % 10);
            card.elm.style.top = row * 120 + 'px';
            card.elm.style.left = col * 120 + 'px';
            this.addChild(card);
            card.elm.addEventListener("click",this.onClickCard.bind(this,card));
  
            
        }
        console.log(cards);
    }

    _createScore() {
        
    }

    onClickCard(card) {
    
    //    let firstCard01 = new Card();
    //     let secondCard02 = new Card();
      // console.log(card);
    //   let card = this;
      console.log(card.index, card.value);
      if (!canClick) return;
  
      if (card === fistCard) return;
   
       if (fistCard === null) {
        fistCard = card;
        fistCard.open();
        console.log('first01',fistCard.value);
           // open card
       } else {
           canClick = false;
           secondCard = card;
           secondCard.open();
           console.log('first02',secondCard);
           // open card
           this.compareCard();
       }

    }
    compareCard() {
        if (fistCard.value === secondCard.value) {
            // hide
            fistCard.hide();
            secondCard.hide();
            alert("hide card");
        } else {
            // close
            alert("close card");
            fistCard.close();
            secondCard.close();
        }
    }
    resetGame() {

    }

}

// create background
let game = new Game();

document.body.appendChild(game.elm);




