let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget(){
  return Math.floor(Math.random()*10)
}
console.log(generateTarget())
function compareGuesses(user,comp,target){
  userDiff=Math.abs(target-user)
  compDiff=Math.abs(target-comp)
  if (userDiff < compDiff){
    return true
  } else if (compDiff < userDiff){
    return false
  }
}

function updateScore(str){
  if (str = 'human'){
    return humanScore++
  } else if (str = 'computer'){
    return computerScore++
  }
}

function advanceRound(){
  return currentRoundNumber ++
}
