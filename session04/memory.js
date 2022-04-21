class Game{ 
    constructor(){
        console.log("game init");
        this.firstCard = {name: "first", index: 1, value: 1};
        this.secondCard = {name: "second", index: 2, value: 2};
        this.play()
        /* 
        game:{ 
                firstCard: {} //0x0001 x
                secondCard: {} //0x0002 x
            }
        */
    }

    play(){
        this.firstCard.second = this.secondCard;
        this.secondCard.fist = this.firstCard;
    }

    destroy(){
        this.secondCard = null;
        /* 
        game:{ 
                firstCard: //0x0001 >>> 0x0002 
                secondCard: //0x0000 (null)
                //0x0001 - none
                //0x0002 - none
                (0x0001 <<<>>> 0x0002)
            }
        */
    }
}

const game = new Game();