var ball = document.getElementById("ball");
var score = document.getElementById("score");
var count = 0;

ball.onclick=function() {
  move();
  
  score.innerHTML = count;
  score.innerHTML.width = "60px";
  count++;
};

function move() {
 var interval = setInterval (function() {
    let dodgeleft = Math.floor(Math.random() * 400);
    let dodgeright = Math.floor(Math.random() * 400) ;
    let dodgetop = Math.floor(Math.random() * 
      800);
    let dodgebottom = Math.floor(Math.random() * 500);
    ball.style.left = dodgeleft+"px";
    ball.style.right = dodgeright+"px";
    ball.style.top = dodgetop+"px";
    ball.style.bottom = dodgebottom+"px";

  }, 1000);
  };
