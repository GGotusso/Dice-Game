var randomnuber1 = Math.floor(Math.random() * 6) + 1 ;

var randomImage = "dice" + randomnuber1 + ".png" ;

var randomImageDice = "images/" + randomImage ;

var image1 = document.querySelectorAll("img")[0];


image1.setAttribute("src", randomImageDice);

var randomnuber2 = Math.floor(Math.random() * 6) + 1 ;

var randomImage2 = "dice" + randomnuber2 + ".png" ;

var randomImageDice2 = "images/" + randomImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageDice2);

if (randomnuber1 > randomnuber2)
{
  document.querySelector("h1").innerHTML = "Player 1 WINS!!"
}
else if (randomnuber2 > randomnuber1)
{
  document.querySelector("h1").innerHTML = "Player 2 WINS!!"
}
else
{
  document.querySelector("h1").innerHTML = "Draw!"
}
