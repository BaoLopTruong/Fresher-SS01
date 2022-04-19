import { Node } from "./core/Node.js";
import { Sprite } from "./core/Sprite.js";
import { Card } from "./components/Card.js";

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
        this.cards = [];
        // for 
        this.firstCard = new Card();
        this.firstCard.open()
        this.secondCard = null;
    }
    _createScore(){

    }

    onClickCard(){

    }
    compareCard(){

    }
    resetGame(){

    }
}

let game = new Game();


document.body.appendChild(game.elm);

