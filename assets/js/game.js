var playerInfo = {
  name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10
};

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;






// game states
//"WIN" - player robot has defeated all enemy robots
//  * fight all enemy robots
//  * defeat each enemy robot
//"LOSE" - player robot's health is zero or less

//funtion to generate a random numeric value
var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

var fight = function(enemyName) {
  //repeat and execute as long as the enemy robot is alive
  while(enemyHealth > 0 && playerInfo.health > 0){

     // ask the user if they want to fight or skip the round
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    
    //if user picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm user wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
        // subtract money from playerInfo.money for skipping
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        console.log("playerInfo.money", playerInfo.money);
        break;
      }
    }

    // generate random damage value based on player's attack power
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

    enemyHealth = Math.max(0, enemyHealth - damage);

    // log a resulting message to the console so we know that it worked
    console.log(
      playerInfo.name + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // check enemy's health
    if (enemyHealth <=0) {
      window.alert(enemyName + " has died!");
      
      // award player money for winning
      playerInfo.money = playerInfo.money + 20;

      //leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // subtract the value of 'enemyAttack' from the value of 'pplayerInfo.health' and use that result to upate the value in the 'playerInfo.health' variable
    var damage = randomNumber(enemyAttack - 3, enemyAttack);

    playerInfo.health = Math.max(0, playerInfo.health - damage);

    // log a resulting message to the console so we know that it worked
    console.log(
      enemyName + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
    );

    //check player's health
    if (playerInfo.health <=0) {
      window.alert(playerInfo.name + " has died!");

      //leave while() loop if player is dead
      break;
    } else {
      window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
    }
  }
};

for(var i = 0; i < enemyNames.length; i++) {
  if (playerInfo.health > 0){
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
    //reset player stats
    playerInfo.health = 100;
    playerInfo.attack = 10;
    playerInfo.money = 10;

    for (var i = 0; i < enemyNames.length; i++){
      if (playerInfo.health > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
  
        var pickedEnemyName = enemyNames[i];
  
        enemyHealth = randomNumber(40, 60);
  
        fight(pickedEnemyName);

        //if we're not at the last enemy in the array
        if (playerInfo.health > 0 && i < enemyNames.length - 1) {
          //ask if user wants to use the store before next round
          var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

          //if yes, take them to the store() function
          if (storeConfirm) {
            shop();
          }
        }
      }
      else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
      }
    }
    //play again
    endGame();
  };

var endGame = function() {
  //if player is still alive, player wins!
  if (pplayerInfo.health > 0){
    window.alert("The game has now ended. Let's see how you did!");
  }
  else {
    window.alert("You've lost your robot in battle.");
  }

  //ask player if they want to play again
  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    //restart the game
    startGame();
  }
  else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

var shop = function() {
  //ask player what they want to do
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );

  //use switch to carry out action
  switch (shopOptionPrompt) {
    case "REFILL":
    case "refill":
      if (playerInfo.money >= 7) {
        window.alert("Refilling player's health by 20 for 7 dollars.");

        //increase health and decrease money
        playerInfo.health = playerInfo.health + 20;
        playerInfo.money = playerInfo.money - 7;
      }
      else {
        window.alert("You don't have enough money!");
      }

      break;
    case "UPGRADE":
    case "upgrade":
      if (playerInfo.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");

      //increase attack and decrease money
      playerInfo.attack = playerInfo.attack + 6;
      playerInfo.money = playerInfo.money - 7;
    }
    else {
      window.alert("You don't have enough money!");
    }

      break;
    case "LEAVE":
    case "leave":
      window.alert("Leaving the store");

      //do nothing, so function will end
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");

      //call shop() again to force player to pick a valid option
      shop();
      break;
  }
};



//start the game when the page loads
startGame();


