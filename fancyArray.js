function fancyArray(arr, sym, reverse){
	if(reverse == false){
		for(var i=0; i<arr.length; i++){
		console.log(i+sym+arr[i]);
		}
	}
	else if(reverse==true){
		for(var i=arr.length-1; i>=0; i--){
		console.log(i+sym+arr[i]);
		}
	}
}
fancyArray(["James", "Jill", "Jane", "Jack"], "<->", true);