(function(){
  //setup to test file
  let resetButton = document.querySelector("#reset");
  let teamOneButton = document.querySelector("#teamone-shoot");
  let teamTwoButton = document.querySelector("#teamtwo-shoot");

  let resetNum = document.querySelector("#num-resets");
  let teamOneShots = document.querySelector("#teamone-numshots");
  let teamOneHit = document.querySelector("#teamone-numhits");
  let teamTwoShots = document.querySelector("#teamtwo-numshots");
  let teamTwoHit = document.querySelector("#teamtwo-numhits");

  var teamOnePercent = Math.random();
  var teamTwoPercent = Math.random();
  let winValue = false;
  let sound = new Audio("");

  console.log("team percentages for checking: team 1: " + teamOnePercent + " team 2: " + teamTwoPercent);

  alert("Pick your Teams!");

  function validatePercents (teamPercent) {
    while (teamPercent < .6){
      teamPercent = Math.random();
      console.log(teamPercent);
    }
    while(teamPercent > .7) {
      teamPercent = Math.random();
      console.log(teamPercent);
    }
      return teamPercent;
  }

  function winTest(teamPercent) {
    let chance = Math.random();
    if(chance>teamPercent) {
      return true;
    } else {
      return false;
    }
  }

  function goal(){
    sound.play();
  }

  resetButton.addEventListener("click", function(){
    resetNum.innerHTML = parseInt(resetNum.innerHTML) + 1;
    teamOneShots.innerHTML = 0;
    teamOneHit.innerHTML = 0;
    teamTwoShots.innerHTML = 0;
    teamTwoHit.innerHTML = 0;
  })

  teamOneButton.addEventListener("click", function(){
    teamOnePercent=validatePercents(teamOnePercent);
    winValue = winTest(teamOnePercent);
    teamOneShots.innerHTML = parseInt(teamOneShots.innerHTML) + 1;
    // console.log(winValue);
    console.log(teamOnePercent);
    if(Math.random()>teamOnePercent) {
    teamOneHit.innerHTML = parseInt(teamOneHit.innerHTML) + 1;
    }
  })

  teamTwoButton.addEventListener("click", function(){
    teamTwoPercent=validatePercents(teamTwoPercent);
    winValue = winTest(teamTwoPercent);
    teamTwoShots.innerHTML = parseInt(teamTwoShots.innerHTML) + 1;
    // console.log(winValue);
    console.log(teamTwoPercent);
    if(Math.random()>teamOnePercent) {
    teamTwoHit.innerHTML = parseInt(teamTwoHit.innerHTML) + 1;
    }

  })

})();
