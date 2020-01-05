let radios = document.getElementsByName('choice');
let btn=document.querySelector("button");
let compWins=0;
let userWins=0;
let rounds=1;

btn.onclick= function (){
    rounds++;
    if(rounds<=6){
      playRound();
      document.getElementById("compWins").innerHTML=compWins;
      document.getElementById("userWins").innerHTML=userWins;
    }
    else{
      gameWinner();
      location.reload();
    }
}

function gameWinner(){
  if(compWins>userWins){
    alert("computer wins match");
  }
  else if(userWins>compWins){
    alert("You win match");
  }
  else{
    alert("The match is a tie");
  }
}

function computerPlay(){
    //Generates random number from 1 to 3
    let rando=Math.floor(Math.random() * 3) + 1;
    
     
    let key=["Rock","Paper","Scissors"];
    let res=key[rando-1];
    return res;
  }
function playerPlay(){
  for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
          // do whatever you want with the checked radio
          return radios[i].value;
          // only one radio can be logically checked, don't check the rest
      }
  }
}
function playRound(pc,cc){
  let playerChoice= playerPlay();
  let computerChoice= computerPlay();
  let finalMessage;
  
  //TESTING
  console.log("Player Choice is: "+ playerChoice);
  console.log("Computer Choice is: "+ computerChoice);
  
  if(playerChoice=="Rock"){
              
              if(computerChoice=="Paper"){
                  compWins+=1;
                  finalMessage="You Lose! Paper beats Rock";
                  //return;
              }
              else if(computerChoice=="Scissors"){
                   userWins+=1;
                   finalMessage="You Win! Rock beats Scissors";
                   //return;
              }
              else{
                   finalMessage="Tie";
                   //return;
               }
          }
          else if(playerChoice=="Paper"){
               
              if(computerChoice=="Rock"){
                  userWins+=1;
                  finalMessage="You Win! Paper beats Rock";
                  //return;
              }
              else if(computerChoice=="Scissors"){
                  compWins+=1;
                  finalMessage="You Lose! Scissors beats Paper!";
                  //return;
                   
              }
              else{
                   
                  finalMessage="Tie";
                  //return;
               }
          }
          else{

              if(computerChoice=="Rock"){
                  compWins+=1;
                  finalMessage="You Lose! Rock beats Scissors";
                  //return;
              }
              else if(computerChoice=="Paper"){
                   userWins+=1;
                   finalMessage="You Win! Scissors beats Paper!";
                   //return;
                   
              }
              else{
                   finalMessage="Tie";
                   //return;
               }
          }
          
          let target=document.querySelector("H2");
          target.innerHTML="Round Result: "+finalMessage;
}

