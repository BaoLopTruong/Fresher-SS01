import { Node } from "../core/Node.js";
import { Sprite } from "../core/Sprite.js";
import { Label } from "../core/Label.js";
export class Card extends Node {
    constructor(index){
        super();
        this.index = index;
        this.value = null;
        this._createSprite();
        this._createCover();
        this._createLabel();
    }
    _createSprite(){
        this.sprite = new Sprite();
        this.sprite.width = 100;
        this.sprite.height =100;
        this.addChild(this.sprite);
    }
    _createCover(){
        let cover = new Node();
        cover.width = 100;
        cover.height = 100;
        cover.elm.style.backgroundColor = "orange";
        cover.elm.style.border = "1px solid blue";
        this.cover = cover;
        this.addChild(this.cover);
    }
    _createLabel(){
        this.label = new Label();
        this.label.text = this.index +1;
        this.addChild(this.label);
    }
    setValue(value) {
        this.value = value;
        this.sprite.path = "./images/trucxanh" + value + ".jpg";
    }
    open(){
        this.cover.elm.style.display = "none";
        this.label.elm.style.display = "none";
    }
    hide(){
    alert("đã block card");
    }
    close(){
        this.cover.elm.style.display = "block";
        this.label.elm.style.display = "block";
    }

}

