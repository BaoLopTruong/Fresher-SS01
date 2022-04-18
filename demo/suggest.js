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
divComponent.style.width = "1000px";
divComponent.style.height = "800px";
divComponent.style.background = "orange";
divComponent.style.position = "absolute";
divComponent.style.left = "20%";
divComponent.style.top = "20%";

    let score=1000;
    let createScore = document.createElement("div");
    document.body.appendChild(createScore); 
    createScore.style.width= "200px";
    createScore.style.color ="black";
    createScore.innerText= " your score: 0" ;
    createScore.style.fontSize = "30px";
    createScore.style.position = "absolute";
    createScore.style.left = "20%";
 function createButtonPlay(){
     let creatButtonPlay =document.createElement("button");
     creatButtonPlay.innerText = "Play Game";
     creatButtonPlay.style.color = "gray";
     creatButtonPlay.style.width = "100px";
     creatButtonPlay.style.height = "40px";
     creatButtonPlay.style.top = "20%";
     createScore.appendChild(creatButtonPlay); 
     return creatButtonPlay;
 }
 //createButtonPlay();
    let buttonPlay =createButtonPlay();
    buttonPlay.addEventListener("click", () => {
        createScore.innerText= " your score: " + score;
        createCard();
    });

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

            card[index].style.width = "200px";
            card[index].style.height = "200px";
            card[index].style.background = "orange";
            card[index].style.position = "absolute";
            card[index].style.border = "2px solid blue";
            khoangCach = count * 200;
            card[index].style.left = khoangCach + "px";
            card[index].style.top = distanceTop + "px";

            label[index] = document.createElement("p");
            card[index].appendChild(label[index]);
            label[index].innerText =  index;
            label[index].style.position = "absolute";
            label[index].style.top = "30px";
            label[index].style.width = "100%";
            label[index].style.textAlign = "center";
            label[index].style.fontSize = "50px";
            label[index].style.color = "white";

           
            count++;
            if (count == 5) {
                distanceTop += 200;
                count = 0;
            }
        }
    }

}

let cards = [
    {
        name: "php",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/php-logo_1.png",
        id: 1,
    },
    {
        name: "css3",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/css3-logo.png",
        id: 2
    },
    {
        name: "html5",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/html5-logo.png",
        id: 3
    },
    {
        name: "jquery",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/jquery-logo.png",
        id: 4
    }, 
    {
        name: "javascript",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/js-logo.png",
        id: 5
    },
    {
        name: "node",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/nodejs-logo.png",
        id: 6
    },
    {
        name: "photoshop",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/photoshop-logo.png",
        id: 7
    },
    {
        name: "python",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/python-logo.png",
        id: 8
    },
    {
        name: "rails",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/rails-logo.png",
        id: 9
    },
    {
        name: "sass",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/sass-logo.png",
        id: 10
    },
    {
        name: "sublime",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/sublime-logo.png",
        id: 11
    },
    {
        name: "wordpress",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/wordpress-logo.png",
        id: 12
    },
];