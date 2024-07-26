var randomNumber1 = Math.random();
randomNumber1 = randomNumber1*6;
randomNumber1= Math.floor(randomNumber1)+1;

var randomDice1= "dice"+randomNumber1+".png";
var randomDiceImage="./images/"+randomDice1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage);


var randomNumber2 = Math.random();
randomNumber2 = randomNumber2*6;
randomNumber2= Math.floor(randomNumber2)+1;

var randomDice2= "dice"+randomNumber2+".png";
var randomDiceImage2="./images/"+randomDice2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImage2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Congratulation Player 1 Winner! 🥳";
}
else if(randomDice1===randomDice2){
    document.querySelector("h1").innerHTML="Draw Match! 🤦‍♂️🤷‍♂️"
}
else{
    document.querySelector("h1").innerHTML="Congratulation Player 2 Winner! 🥳";
}
