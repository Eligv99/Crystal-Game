 
// function will work when the page uploads
$(document).ready(function(){

    // Creates a random number for the user to reach
    var computerChoice = Math.floor(Math.random() * (120-19 +1)) + 19

    // display it a random number in the id (number) in the html
    $('#number').html(computerChoice)

    // console log the random number
    console.log("The random number is " + computerChoice)

    // pick a random value for each cristal from 1 to 12
    // This value is hidden from the player
    var greenGem = Math.floor(Math.random() * (12-1+1)) +1
	var purpleGem = Math.floor(Math.random() * (12-1+1)) +1
	var redGem = Math.floor(Math.random() * (12-1+1)) +1
    var blueGem = Math.floor(Math.random() * (12-1+1)) +1
    

    // Create variables for wins and losses
    // Start off score for wins and losses
    var wins = 0;
    var lose = 0;
    var finalScore = 0;

    //append win/lose variables to the winLoseBox
	$(".win").html(wins)
    $(".lose").html(lose)
    
	//append final score to the scorebox
    $(".number-value").html(finalScore)
    
    // This function will set all values to a new one to continue the game
    function reset (){
        //The computer will choose a new random number to reset it 
        var computerChoice = Math.floor(Math.random() * (120-19 +1)) + 19;
        console.log("This is computerChoice " + computerChoice);

        //The computer choice will be displayed in the id called RandomBox
        $("#number").html(computerChoice)

        //each gem once again will select a random number between 1-12
        greenGem = Math.floor(Math.random() * 12) +1;
        purpleGem = Math.floor(Math.random() * 12) +1;
        redGem = Math.floor(Math.random() * 12) +1;
        blueGem = Math.floor(Math.random() * 12) +1;

        //final total will be 0 
        finalScore = 0;

        //Final total will be displayed in the number-value
        $(".number-value").html(finalScore);
    
        //Making sure what type of value the gems are returning
        console.log("Type of green Gem is " + greenGem)
        console.log("Type of purple Gem is " + purpleGem)
        console.log("Type of red Gem is " + redGem)
        console.log("Type of blue Gem is " + blueGem)
       
        //append win/lose variables to the winLoseBox
        $(".win").html(wins)
        $(".lose").html(lose)
      
    }

    // this will be executed when a player wins
    function winGame() {

        //the win score will go up one point
        wins++

        //display the 'You Win!' message to the user
        alert("You Won... Great Job!")

        //call the reset function to start the game over again
        reset();


    }

    // fuction will be executed when user losses
    function loseGame() {

        //The loose score will go up one point
        lose++

        //Display the 'You Lose!' message to the player
        alert("You Lost! Try Again..")

        //Call the reset function to start the game over again
        reset();
    }
    
    // This function will be executed when the user click's the gems 
    // Green Gem 

    $("#greenGem").on('click', function() { 

        //the value of the green gem will be added to the finalscore
        finalScore = finalScore + greenGem

        //The value will be appended to the html id $(".scoreBox")
        $(".number-value").html(finalScore);

        // if the finalscore equals to the computerChoice the call the winGame to to reset a game and add a point to the win score
        if (finalScore === computerChoice){
            //call win function
			winGame();
        } 
        
        // if this is not equal then call the losegame function to reset a game and add a point to the lose score 
        else if (finalScore > computerChoice) {
            //call the lose function
            loseGame();
        }
        

    })

    // Purple Gem 
    $("#purpleGem").on('click', function() { 

        //the value of the purple gem will be added to the finalscore
        finalScore = finalScore + purpleGem

        //The value will be appended to the html id $(".scoreBox")
        $(".number-value").html(finalScore);

        // if the finalscore equals to the computerChoice the call the winGame to to reset a game and add a point to the win score
        if (finalScore === computerChoice){
            //call win function
			winGame();
        } 
        
        // if this is not equal then call the losegame function to reset a game and add a point to the lose score 
        else if (finalScore > computerChoice) {
            //call the lose function
            loseGame();
        }
        

    })

    // Red Gem 
    $("#redGem").on('click', function() { 

        //the value of the red gem will be added to the finalscore
        finalScore = finalScore + redGem

        //The value will be appended to the html id $(".scoreBox")
        $(".number-value").html(finalScore);

        // if the finalscore equals to the computerChoice the call the winGame to to reset a game and add a point to the win score
        if (finalScore === computerChoice){

            //call win function
			winGame();
        } 
        
        else if (finalScore > computerChoice) {

            //call the lose function
            loseGame();
        }
        

    })

    // blue gem
    $("#blueGem").on('click', function() { 

        //the value of the blue gem will be added to the finalscore
        finalScore = finalScore + blueGem

        //The value will be appended to the html id $(".scoreBox")
        $(".number-value").html(finalScore);

        // if the finalscore equals to the computerChoice the call the winGame to to reset a game and add a point to the win score
        if (finalScore === computerChoice){
            //call win function
			winGame();
        } 
        
        // if this is not equal then call the losegame function to reset a game and add a point to the lose score 
        else if(finalScore > computerChoice) {
            //call the lose function
            loseGame();
        }
        

    })

    //Making sure what type of value the gems are returning
    console.log("Type of green Gem is " + greenGem)
    console.log("Type of purple Gem is " + purpleGem)
    console.log("Type of red Gem is " + redGem)
    console.log("Type of blue Gem is " + blueGem)

})