var images = ["dice1","dice2","dice3","dice4","dice5","dice6"];

var renderImage1 = document.querySelector(".img1");
var randInt1 = Math.floor(Math.random()*6 );
console.log(randInt1);
var randomImage1 = "./images/"+images[randInt1]+".png";
renderImage1.setAttribute("src",randomImage1);

var renderImage2 = document.querySelector(".img2");
var randInt2 = Math.floor(Math.random()*6 );
console.log(randInt2);
var randomImage2 = "./images/"+images[randInt2]+".png";
renderImage2.setAttribute("src",randomImage2);


if(randInt1> randInt2){
    document.querySelector(".container").firstElementChild.innerHTML = "Player 1 Wins";
}else{
    document.querySelector(".container").firstElementChild.innerHTML = "Player 2 Wins";
}