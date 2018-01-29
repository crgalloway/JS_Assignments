var reward=0.01;
var sum=0;
for(var i=0; i<=30; i++){
	sum+=reward;
	reward*=2;
	if(sum >=10000 && sum<11000){
		var days = i;
	}
}
console.log("$"+sum+" at 30 days.");
console.log("It takes "+days+" days to reach $10,000")

for(var i=0; i<=10000; i++){
	reward*=2;	
	sum+=reward;
	if(sum >=10000000000 && sum<11000000000){
		console.log("It takes "+(i+30)+" days to reach $10,000,000,000")
	}
	if(sum == Infinity){
		console.log("It takes "+(i+30)+" days to reach infinity");
		break;
	}
}