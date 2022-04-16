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
    let card = [];
    let label = [];
    let breakRow = 5;
    let distanceTop = 0;
    let count = 0;
    for (let index = 0; index <= 20; index++) {
        let khoangCach = 0;
        if (index >= 1 && index <= 20) {
            card[index] = document.createElement("div");
            divComponent.appendChild(card[index]);
            label[index] = document.createElement("p");
            card[index].appendChild(label[index]);
            label[index].innerText = "Block" + index;
            label[index].style.position = "absolute";
            label[index].style.top = "30px";
            label[index].style.width = "100%";
            label[index].style.textAlign = "center";
            label[index].style.fontSize = "30px";
            label[index].style.color = "white";

            card[index].style.width = "160px";
            card[index].style.height = "160px";
            card[index].style.background = "red";
            card[index].style.position = "absolute";
            card[index].style.borderRadius = "10px";
            khoangCach = count * 210;
            card[index].style.left = khoangCach + "px";
            card[index].style.top = distanceTop + "px";
            count++;
            if (count == 5) {
                distanceTop += 200;
                count = 0;
            }
        }
    }

}

createCard();