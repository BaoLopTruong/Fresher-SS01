// let cover01 = document.createElement("div");
// cover01.style.backgroundColor = "orange";
// cover01.style.width = "100px";
// cover01.style.height = "100px";
// cover01.style.top = "100px";
// cover01.style.left = "100px";
// document.body.appendChild(cover01);

// function createLabel(index){
//     let Label = document.createElement("div");
//     Label.innerText = index;
//     Label.style.position = "absolute";
//     Label.style.top = "35px";
//     Label.style.left = "50px";
//     Label.style.fontSize = "30px";
//     return Label;
// }

// let Label01 = createLabel(1);
// cover01.appendChild(Label01);
// create Card
// create image
// create cover
// create Label
// open
// close
// hide

// create 20 Cards ( 20 index, 10 value )
// display Cards
// shuffle Cards
// first Card
// second Card
// matched ? hide : close




const COLOR = "orange";
const WIDTH = "100px";
const HEIGHT = "100px";
const TOP = "100px";
const LEFT = "100px";

// let index =1;

//    let html='<div id="'+ index + '"' + 'style="'+ 'background-color:'+COLOR +';width:'+ WIDTH+ ';height:'+ HEIGHT + ';top:' + TOP + ';left:'+ LEFT  +';"' + '>' + '</div> ';

// document.getElementById('demo').innerHTML = html;
let divComponent = document.createElement("div");
document.body.appendChild(divComponent);
divComponent.style.width = "1200px";
divComponent.style.height = "900px";
divComponent.style.background = "green";
divComponent.style.position = "absolute";
divComponent.style.left = "20%";
divComponent.style.top = "2%";



function createCard() {
    let Label = [];
    let Card = [];
    let blockDown = 5;
    for (let index = 0; index < 20; index++) {

        Card[index] = document.createElement("div");
        divComponent.appendChild(Card[index]);
        Label[index] = document.createElement("span");
        divComponent.appendChild(Label[index]);
        Label[index].innerText = index;
        Label[index].style.position = "absolute";
        Label[index].style.top = "30px";
        Label[index].style.width = "100%";
        Label[index].style.textAlign = "center";
        Label[index].style.fontSize = "30px";
        Label[index].style.color = "white";

        Card[index].style.width = "200px";
        Card[index].style.height = "200px";
        Card[index].style.background = "orange";
        Card[index].style.position = "absolute";
        Card[index].style.border = "solid 2px blue";
        Card[index].style.lineHeight= "10px";

    }

}

createCard();