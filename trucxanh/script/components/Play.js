import { Node } from "../core/Node.js";

export class Play extends Node {
    constructor(){
        super();
        this._createElement();
    }

    _createElement(){
        let elm = document.createElement("span");
    }
}