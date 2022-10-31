
  let randomNumber1 = Math.floor(Math.random()*6+1);
  document.querySelector(".img1").setAttribute("src", "images/dice"+randomNumber1+".png");

  let randomNumber2 = Math.floor(Math.random()*6+1);
  document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png");

whoWin(randomNumber1,randomNumber2);

function whoWin(randomNumber1,randomNumber2){
  if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!🚩";

    if (localStorage.playeronescore) {
      localStorage.playeronescore = Number(localStorage.playeronescore)+1;
    } else {
      localStorage.playeronescore = 1;
    }
  }
  else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "🚩Player 2 Wins!🚩";

    if (localStorage.playertwoscore) {
      localStorage.playertwoscore = Number(localStorage.playertwoscore)+1;
    } else {
      localStorage.playertwoscore = 1;
    }
  }
  else{
    document.querySelector("h1").innerHTML = "Draw!";
  }

  document.getElementById("player1score").innerHTML = "Player 1 Score: " + localStorage.playeronescore;
  document.getElementById("player2score").innerHTML = "Player 2 Score: " + localStorage.playertwoscore;
}

const reloadtButton = document.querySelector(".btn");
// Reload everything:
 const reload = reload => {reload = location.reload();}

 
// Event listeners for reload
reloadButton.addEventListener("click", reload, false);
