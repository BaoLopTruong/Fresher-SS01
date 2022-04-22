import { Node } from "../core/Node.js";
import { Sprite } from "../core/Sprite.js";
import { Label } from "../core/Label.js";
export class Card extends Node {
    constructor(index) {
        super();
        this.index = index;
        this.value = null;
        this._createSprite();
        this._createCover();
        this._createLabel();
    }
    _createSprite() {
        this.sprite = new Sprite();
        this.sprite.width = 100;
        this.sprite.height = 100;
        this.sprite.x = 100;
        this.sprite.y = 100;
        this.sprite.scaleX = 0;
        //this.sprite.zIndex = 0;
        this.addChild(this.sprite);
    }
    _createCover() {
        let cover = new Node();
        cover.y = 100;
        cover.x = 100;
        cover.width = 100;
        cover.height = 100;
        cover.elm.style.backgroundColor = "orange";
        cover.elm.style.border = "1px solid blue";
        this.cover = cover;
        this.addChild(this.cover);
    }
    _createLabel() {
        let label = new Label();
        label.text = this.index + 1;
        label.x = 143;
        label.y = 140;
        label.width = 40;
        this.label = label;
        this.addChild(label);
    }
    setValue(value) {
        this.value = value;
        this.sprite.path = "./images/trucxanh" + value + ".jpg";
    }
    open() {
        this.cover.elm.style.display = "none";
        this.label.elm.style.display = "none";
    }
    hide() {
        this.sprite.elm.style.display = "none";
    }
    close() {
        this.cover.elm.style.display = "block";
        this.label.elm.style.display = "block";
    }
    flipCard() {
        const tl = gsap.timeline({ paused: true });
        tl.to(this.cover, { scaleX: 0, duration: 0.2 });
        tl.to(this.label, { scaleX: 0, duration: 0.2 });
        tl.call(() => {
            this.open();
        })
        tl.to(this.sprite, { scaleX: 1, duration: 0.2 });
        tl.play();
    }
    flopCard() {
        const tl = gsap.timeline({ paused: true });
        tl.to(this.sprite, { scaleX: 0, duration: 0.2 });
        tl.call(() => {
            this.close();
        })
        tl.to(this.cover, { scaleX: 1, duration: 0.2 });
        tl.to(this.label, { scaleX: 1, duration: 0.2 });
        tl.play();
    }
    zoomIn() {
        const tl = gsap.timeline({ paused: true });
        this.sprite.elm.style.position = "relative";
        //this.sprite.elm.style.zIndex = "1";
        tl.to(this.sprite, { zIndex: 99, duration: 2 });
        tl.to(this.sprite, { zIndex: 99, duration: 2, width: 200, height: 200 });
        tl.call(() => {
            this.hide();
        })
        tl.play();
    }

}

