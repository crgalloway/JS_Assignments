var quarters=50;
var goal=200;
function slots(games, stopAt){
	var count=0;
	for(var i=games; i>=0; i--){
		if(i==0){
			console.log("You played "+count+" times.");
			console.log("Game Over, come back when you have more money!");
			return;
		}
		else if(i>=stopAt){
			console.log("You currently have "+i+" quarters!")
			console.log("That's $"+(i*0.25)+"!");
			return;
		}
		else{
			count++;
			var result=Math.floor(Math.random()*100)+1;
			if(result==100){
				var wins=Math.floor(Math.random()*50)+50;
				console.log("You just won "+wins+" quarters on game "+count+"!");
				i+=wins;
			}
		}
		
	}
	
}
slots(quarters, goal);