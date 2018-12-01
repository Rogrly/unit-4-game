//  Document ready set for javascript to load first before the html
$(document).ready(function() {
  //  Declaring a variable that generates a random number from ( 19-120 )
  var number = Math.floor(Math.random()*101+19)
    //  Attaching the random number to be shown in the HTML (in the "currentValue" id
    $("#currentValue").text(number);
  //  Declaring variables for each crystal to generate a random value number ( 1-12 )
  var blue = Math.floor(Math.random()*11+1)
  var purp = Math.floor(Math.random()*11+1)
  var red = Math.floor(Math.random()*11+1)
  var yellow = Math.floor(Math.random()*11+1)
  //  Setting variables for each score counts in game; wins (collect), losses (lost), score (playerValue)
  var playerValue = 0; 
  var collect = 0;
  var lost = 0;
    //  Linking the results of the wins & losses into the HTML
    $("#winScore").text(collect);
    $("#loseScore").text(lost);
       //  Making a function that restarts the game
      function restart() {
        //  Restarts the variable number and logs the number that was won/loss into the console
        number = Math.floor(Math.random()*101+19);
          console.log(number)
          //  Places the "number" variable into the HTML id "currentValue"
          $("#currentValue").text(number);
        // Restarts the random number value for each crystal
        blue = Math.floor(Math.random()*11+1);
        purp = Math.floor(Math.random()*11+1);
        red = Math.floor(Math.random()*11+1);
        yellow = Math.floor(Math.random()*11+1);
        //  Restart the playerVale variable back to 0
        playerValue = 0;
          //  Places the "playerValue" variable into the HTML id "Score"
          $("#Score").text(playerValue);
        } 
        //  Making a function that adds to the "wins" score
      function wins(){
        //  When the "wins" function is called alert the player
        alert("Awesome!  You've collected a Crystal");
        //  Add an addition value of 1 into the "collect" variable
        collect++; 
        //  Places the collect number into the HTML id "winScore"
        $("#winScore").text(collect);
        //  Triggers the "restartGame" function
        restart();
        }
      //  Making a function that adds to the "loss" score
      function loss(){
        //  When the "loss" function is called alert the player
        alert ("Sorry, you dropped the crystal and lost it...");
        //  Add a value to the "lost" variable
        lost++;
        //  Sets the lost number into the HTML id "loseScore"
        $("#loseScore").text(lost);
        // Triggers the "restartGame" function
        restart()
        }
      //  Setting the click functions and conditions for each crystal
      //  Every time the player clicks the blue crystal - trigger this function
      $("#crystalBlue").on ("click", function(){
      //  Add in the "blue" variable's number into the "playerValue" variable
      playerValue = playerValue + blue;
        //  Log this value into the console with each click
        console.log(playerValue);
        //  Insert this number into the HTML id "Score" each click
        $("#Score").text(playerValue); 
          //  Setting the wins & loss conditions
          //  If the "playerValue" loosely equates the number variable value - trigger "wins" function
          if ( playerValue == number ){
            wins();
          }
          //  Else if the "number" variable is greater than the "playerValue" variable - trigger "loss" function
          else if ( playerValue > number ){
            loss();
          }   
        })  
      //  When the player clicks on the purple crystal - execute this function
      $("#crystalPurp").on ("click", function(){
      //  Adds the "purp" variable's number into the "playerValue" variable
      playerValue = playerValue + purp;
        //  Log the number into the console every click
        console.log(playerValue);
        //  Inserts the number into the HTML id "Score" each click
        $("#Score").text(playerValue); 
          //  If the "playerValue" equals the "number" variable - trigger the "wins" function
          if ( playerValue == number ){
            wins();
          //  Else if the "number" variable value is greater than the "playerValue" variable - trigger "loss" function
          }
          else if ( playerValue > number ){
            loss();
          } 
        })  
      //  When player clicks on the red crystal - execute this function
      $("#crystalRed").on ('click', function(){
      // Adds the "red" variable to the "playerValue" variable
      playerValue = playerValue + red;
        //  Logs this number into the console every time it's clicked
        console.log(playerValue);
        //  Places this number into the HTML id "Score" each click
        $("#Score").text(playerValue);
          //  If the "playerValue" variable is equal to the "number" variable value - execture the "wins" function
          if (playerValue == number){
            wins();
          }
          //  Else if the "number" variable is different from the "playerValue" variable - execute the "loss" function
          else if ( playerValue > number){
            loss();
          } 
        })  
        //  When the player clicks on the yellow crystal - execute this function
        $("#crystalYellow").on ('click', function(){
        //  Adds in the "yellow" variable into the "playerValue" variable
        playerValue = playerValue + yellow;
          //  Logs this number into the console every click
          console.log(playerValue);
          //  Inserts this number into the HTML id "Score" each click
          $("#Score").text(playerValue); 
          //  If the "playerValue" variable equals the "number" variable - trigger the "wins" function
          if (playerValue == number){
            wins;
          //  Else if the "playerValue" does not equal the "number" variable - trigger the "loss" function
          }
          else if ( playerValue > number){
            loss();
          }
    });   
}); 