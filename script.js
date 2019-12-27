function game(){
  let compWins=0;
  let userWins=0;

  //Generates & Returns Random Move by Computer
  function computerPlay(){
        //Generates random number from 1 to 3
        rando=Math.floor(Math.random() * 3) + 1;
        
     
        let key=["rock","paper","scissors"];
        let res=key[rando-1];
        return res;   
  }
  //Returns Winner of one round of RPS  
  function playRound(playerChoice,compChoice){
          playerChoice=playerChoice.toLowerCase();    
      
          if(playerChoice=="rock"){
              
              if(compChoice=="paper"){
                  compWins+=1;
                  console.log("You Lose! Paper beats Rock");
                  return; 
              }
              else if(compChoice=="scissors"){
                   userWins+=1;
                   console.log("You Win! Rock beats Scissors");
                   return      
              }
              else{
                   console.log("Tie");
                   return;
               }
          }
          else if(playerChoice=="paper"){
               
              if(compChoice=="rock"){
                  userWins+=1;
                  console.log("You Win! Paper beats Rock");
                  return
              }
              else if(compChoice=="scissors"){
                  compWins+=1;
                  console.log("You Lose! Scissors beats Paper!");
                   return 
                   
              }
              else{
                   
                  console.log("Tie");
                  return
               }
          }
          else{

              if(compChoice=="rock"){
                  compWins+=1;
                  console.log("You Lose! Rock beats Scissors");
                  return
              }
              else if(compChoice=="paper"){
                   userWins+=1;
                   console.log("You Win! Scissors beats paper!");
                   return;
                   
              }
              else{
                   console.log("Tie");
                   return;
               }
          }
  }

 

    let pc=prompt("What's your Move?", "Rock, Paper, or Scissors?");
    let cc=computerPlay();

    console.log("Computer Move is: " + cc);
    console.log("Player Move is: " + pc);
    playRound(pc,cc);
    console.log("Current Computer Wins: " + compWins);
    console.log("Current User Wins: " + userWins);
    console.log("");
}