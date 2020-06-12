var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;






// game states
//"WIN" - player robot has defeated all enemy robots
//  * fight all enemy robots
//  * defeat each enemy robot
//"LOSE" - player robot's health is zero or less



var fight = function(enemyName) {
  //repeat and execute as long as the enemy robot is alive
  while(enemyHealth > 0 && playerHealth > 0){

     // ask the user if they want to fight or skip the round
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    
    //if user picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm user wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
      }
    }

    // subtract the value of 'playerAttack' from the value of 'enemyHealth' and use result to update the value in the 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;

    // log a resulting message to the console so we know that it worked
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // check enemy's health
    if (enemyHealth <=0) {
      window.alert(enemyName + " has died!");
      
      // award player money for winning
      playerMoney = playerMoney + 20;

      //leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to upate the value in the 'playerHealth variable
    playerHealth = playerHealth - enemyAttack;

    // log a resulting message to the console so we know that it worked
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    //check player's health
    if (playerHealth <=0) {
      window.alert(playerName + " has died!");

      //leave while() loop if player is dead
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  }
};

for(var i = 0; i < enemyNames.length; i++) {
  if (playerHealth > 0){
    //let user know what round they are in, arrays start at 0 so it needs to have 1 added to it
    window.alert("Welcome to Robot Gladiators! Round " + (i +1));

    //pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyName = enemyNames[i];

    //reset enemyHealth before starting new fight
    enemyHealth = 50;

    //use debugger to pause script from running and check what's going on at the moment in the code
    debugger;

    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyName);
  } 
  else 
    //notify player when player robot has been defeated and the game has ended
    window.alert("You have lost your robot in battle! Game Over!");
    break;
  }

//function to start a new game
  var startGame = function() {
    for (var i = 0; i < enemyNames.length; i++){
      if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
  
        var pickedEnemyName = enemyNames[i];
  
        enemyHealth = 50;
  
        fight(pickedEnemyName);
      }
      else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
      }
    }
    //play again
    startGame();
  };

//fight()

//start the game when the page loads
startGame();

//when the player is defeated or there are no more enemies, call an endGame() function

  //alert the player's total stats
  //ask player if they want to play again
  //if yes, call startGame() to restart the game

//after the player skips or defeats an enemy & there are still more robots to fight
  //ask the player if they want to "shop"
  //if no, continue as normal
  //if yes, call the shop() function
  //in the shop() function, as the player if they want to "refill" health, "upgrade" attack, or "leave" the shop
  //if refill, subtract money points from player and increase health
  //if upgrade, subtract money points from player and increase attack power
  //if leave, alert goodbye and exit the function
  //if any other invalid option, call shop() again
