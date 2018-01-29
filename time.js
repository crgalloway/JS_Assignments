var hour=6;
var minute=50;
var period="AM";
var dispHour=hour;
var proximity="how close to hour";
var timeOfDay="time of day";
if(period=="AM"){
	timeOfDay=" in the morning.";
}
else{
	timeOfDay=" in the evening.";
}
if(minute<30){
	proximity=" almost ";
	var dispHour=hour+1;
	if(dispHour>12){
		dispHour=dispHour-12;
	}
}
else if(minute=30){
	proximity=" half past ";
}
else{
	proximity=" just after ";
}
console.log("it is"+proximity+dispHour+timeOfDay);