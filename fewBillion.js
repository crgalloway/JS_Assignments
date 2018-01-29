var sum=0.01;
for(var i=1; i<=30; i++){
	sum*=2;
	if(sum >=10000 && sum<11000){
		var days = i;
	}
}
console.log(sum);
console.log("It takes "+i+" days to reach $10,000")
for(var i=0; i<=10000; i++){
	sum*=2;	
	if(sum == Infinity){
		console.log("It takes "+(i+30)+" days to reach infinity");
		break;
	}
}