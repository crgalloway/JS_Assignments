
var testArray=["cow", 42, 36, "chicken", "apple", false, 18]
function numbersOnly(arr){
	var newArr=[];
	for(var i=0;i<arr.length;i++){
		if((typeof arr[i]) == "number"){
			newArr.push(arr[i]);
		}
	}
	return(newArr);
}
function removeNumbers(arr){
	for(var i=0;i<arr.length;i++){
		if((typeof arr[i]) == "number"){
			arr.splice(i,1);
		}
	}
}
console.log(testArray);
console.log(numbersOnly(testArray));
removeNumbers(testArray);
console.log(testArray);