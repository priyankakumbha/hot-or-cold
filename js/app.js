
$(document).ready(function(){
	var randomNumber =  Math.floor((Math.random() * 100) + 1);
	console.log("random number generated" +randomNumber);
	/*$(document).on("click", "#guessButton", function(){*/
		$("form").submit(function(event){
		
		event.preventDefault();
		var guessNumber= $("#userGuess").val();
		console.log("guessnumber" +guessNumber);
		var guessDifference = randomNumber-guessNumber;
   var hotcoldResult= checkTemperature(guessDifference);
   console.log(hotcoldResult );
   $( "#feedback" ).text(hotcoldResult);
 
    
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
function checkTemperature(guessDifference){
   var resultstring='' ;
   if(guessDifference==0){
     
     
      resultstring="you got it";
   } else if(guessDifference>0 &&guessDifference<=10){
   
   	resultstring="you are very hot";
      }
   else if(guessDifference>=10 && guessDifference<=20){
   	
   	resultstring="you are hot";
      }
      else if(guessDifference>=20 && guessDifference<=30){
   	
   	resultstring="you are warm";
      }
     else if(guessDifference>=30 && guessDifference<=50){
   	
   	resultstring="you are cold";
      }

   else if(guessDifference>=50) {
   	
   	resultstring="you are ice cold";
      
   }
   else{
   	
   	resultstring="you are freezing";
   }
  
   return resultstring;
    
  }



