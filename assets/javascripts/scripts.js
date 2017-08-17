(function(){
  //setup to test file
  let resetButton = document.querySelector("#reset");
  let teamOneButton = document.querySelector("#teamone-shoot");
  let teamTwoButton = document.querySelector("#teamtwo-shoot");

  let resetNum = document.querySelector("#num-resets");
  let teamOneShots = document.querySelector("#teamone-numshots");
  let teamOneHit = document.querySelector("#teamone-numhits");
  let teamOneWins=document.querySelector("#teamone-wins");
  let teamTwoShots = document.querySelector("#teamtwo-numshots");
  let teamTwoHit = document.querySelector("#teamtwo-numhits");
  let teamTwoWins=document.querySelector("#teamtwo-wins");
  var teamOnePercent = setPercent();
  var teamTwoPercent = setPercent();
  let winValue = false;
  let yay = document.querySelector("#yay");
  let intro = document.querySelector("#intro");
  let reset = document.querySelector("#resetSnd");
  let noHit = document.querySelector("#noHit");

  function setPercent (){
    var percent = Math.random();
    while (percent < .5 || percent > .7){
      percent = Math.random();
      console.log(percent);
    }
      return percent;
  }

  console.log("team percentages for checking: team 1: " + teamOnePercent + " team 2: " + teamTwoPercent);

  // alert("Pick your Teams!");//testing window loaded correctly


  function winTest(teamPercent) {
    let chance = Math.random();
    if(chance>teamPercent) {
      return true;
    } else {
      return false;
    }
  }

  resetButton.addEventListener("click", function(){
    resetNum.innerHTML = parseInt(resetNum.innerHTML) + 1;
     if(teamOneHit.innerHTML>teamTwoHit.innerHTML){//team one wins
       console.log ("1 wins team1: " + teamOneHit.innerHTML + " team2: " + teamTwoHit.innerHTML);
       teamOneWins.innerHTML=parseInt(teamOneWins.innerHTML) + 1;
     }
     if (teamOneHit.innerHTML<teamTwoHit.innerHTML){
       console.log ("2 wins team1: " + teamOneHit.innerHTML + " team2: " + teamTwoHit.innerHTML);
       teamTwoWins.innerHTML=parseInt(teamTwoWins.innerHTML) + 1;//team two wins
     }

    teamOneShots.innerHTML = 0;
    teamOneHit.innerHTML = 0;
    teamTwoShots.innerHTML = 0;
    teamTwoHit.innerHTML = 0;
  })

  teamOneButton.addEventListener("click", function(){
    winValue = winTest(teamOnePercent);
    teamOneShots.innerHTML = parseInt(teamOneShots.innerHTML) + 1;
    // console.log(winValue);
    console.log(teamOnePercent);
    if(Math.random()>teamOnePercent) {
      teamOneHit.innerHTML = parseInt(teamOneHit.innerHTML) + 1;
    }
  })

  teamTwoButton.addEventListener("click", function(){
    winValue = winTest(teamTwoPercent);
    teamTwoShots.innerHTML = parseInt(teamTwoShots.innerHTML) + 1;
    // console.log(winValue);
    console.log(teamTwoPercent);
    if(Math.random()>teamOnePercent) {
    teamTwoHit.innerHTML = parseInt(teamTwoHit.innerHTML) + 1;
    }

  })

})();
