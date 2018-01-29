var daysTilBDay=60;
for(var i=daysTilBDay;i>=0;i--){
	if(i>30){
		console.log(i+" days until my birthday. It's so far away...");
	}
	else if(i<=30 && i>5){
		console.log(i+" days until my birthday, it's getting a bit closer.");
	}
	else if(i<=5 && i>0){
		console.log(i+" DAYS UNTIL MY BIRTHDAY! IT'S ALMOST HERE!!");
	}
	else{
		console.log("♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*");
		console.log("♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪");
		console.log("*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«");
	}
}