import { Node } from "../core/Node.js";

export class Score extends Node{
    constructor(){
        super();
        this._score =null ;
        this._createElement();
    }
    get score(){
        return this._score;
    }
    set score(value){
        this._score = value;
        this.elm.innerText = "Score = " + this._score;
    }

    _createElement(){
        let elm = document.createElement("span");
        elm.style.position = "absolute";
        //elm.innerText ="Score = 100" ;
        elm.style.color = "white";
        elm.style.fontSize = "30px";
        return elm;
    }
}