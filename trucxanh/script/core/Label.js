import { Node } from "./Node.js";

export class Label extends Node {
    constructor() {
        super();
        this._text = "";
    }

    get text() {
        return this._text;
    }
    set text(value){
        this._text = value;
        this.elm.innerText = value;
    }
    _createElement(){
        let elm = document.createElement("span");
        elm.style.position = "absolute";
        elm.style.top = "40px";
        elm.style.left = "45px";
        elm.style.fontSize= "20px";
        return elm;
    }
}