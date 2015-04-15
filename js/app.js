
$(document).ready(function(){
  var winFlag= false;
	var randomNumber=generateRandomNumber();
  var guessCounter = 0;
  console.log("random number generated" +randomNumber);
  $(document).on("click", ".new", function(){
   startNewGame();
   winFlag=false;
   guessCounter= 0;
   randomNumber=generateRandomNumber();
   console.log("random number generated new game" +randomNumber);

  });


	/*$(document).on("click", "#guessButton", function(){*/
		$("form").submit(function(event){
	  event.preventDefault();
		var guessNumberString= $("#userGuess").val();
    var guessNumber= +guessNumberString;
    console.log(winFlag);
    if(winFlag){ 
      $( "#feedback" ).text("you already won the game, start new game");

    }else if(isNaN(guessNumber)) {
    $( "#feedback" ).text("please enter a valid number");
    } else{
		console.log("guessnumber" +guessNumber);
    console.log("randomNumber *" +randomNumber);
		var guessDifference = randomNumber-guessNumber;

    var hotcoldResult= checkTemperature(guessDifference);
    if(hotcoldResult=="you got it"){
      winFlag= true;
    }
    guessCounter= guessCounter + 1;
    console.log(hotcoldResult );
    setFeedback(hotcoldResult);
    setGuessCounter(guessCounter);
    setGuessList(guessNumber);
    } 
});
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});
/* ---- Calculatioan of feedback ----*/
function checkTemperature(guessDifference){
   var resultstring='' ;
   if(guessDifference==0){
     resultstring="you got it";
      
   } else if(guessDifference>0 &&guessDifference<=10){
   
   	resultstring="you are very hot";
    }else if(guessDifference>=10 && guessDifference<=20){
   	
   	resultstring="you are hot";
    }else if(guessDifference>=20 && guessDifference<=30){
   	
   	resultstring="you are warm";
    }else if(guessDifference>=30 && guessDifference<=50){
   	
   	resultstring="you are cold";
   }else if(guessDifference>=50) {
   	resultstring="you are ice cold";
   }
   else{
   	resultstring="you are freezing";
   }
   return resultstring;
}

function generateRandomNumber() {
  var randomNumber =  Math.floor((Math.random() * 100) + 1);
  return randomNumber;
}

function setFeedback(feedback) {
$( "#feedback" ).text(feedback);
}

function setGuessCounter(guessCount) {
$("#count").text(""+guessCount);

}
function setGuessList(guessNumber) {
$( "#guessList" ).append(' '+guessNumber);

}
function startNewGame() {
   console.log("starting new game");
   $( "#guessList" ).empty();
    
    setGuessCounter(0);
    setFeedback("Make your Guess");
    $("#userGuess").val('');
  
  }


