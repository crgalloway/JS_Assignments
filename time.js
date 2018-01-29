function whatIsTime(hour, minute, period){
	var dispHour=hour;
	var proximity="";
	var timeOfDay="";
	if(minute>30){
		proximity=" almost ";
		var dispHour=hour+1;
		if(dispHour>12){
			dispHour=dispHour-12;
			if(period=="AM"){
				period="PM";
			}
			else{
				period="AM";
			}
		}
	}
	else if(minute==30){
		proximity=" half past ";
	}
	else{
		proximity=" just after ";
	}
	if(period=="AM"){
		timeOfDay=" in the morning.";
	}
	else{
		timeOfDay=" in the evening.";
	}
	console.log("it is"+proximity+dispHour+timeOfDay);
}
whatIsTime(12, 10, "AM");