var students = [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
]
var users = {
 'Students': [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
  ],
 'Instructors': [
     {first_name : 'Michael', last_name : 'Choi'},
     {first_name : 'Martin', last_name : 'Puryear'}
  ]
 }
function studentRoster(arr){
	for(var i=0; i<arr.length; i++){
		console.log(arr[i].first_name+" "+arr[i].last_name);
	}
}
function userList(list){
    console.log("Students:")
	for(var i=0; i<list.Students.length; i++){
		console.log((i+1)+" - "+list.Students[i].first_name.toUpperCase()+" "+list.Students[i].last_name.toUpperCase()+" - "+(list.Students[i].first_name.length+list.Students[i].last_name.length));
	}
    console.log("Instructors:")
	for(var i=0; i<list.Instructors.length; i++){
		console.log((i+1)+" - "+list.Instructors[i].first_name.toUpperCase()+" "+list.Instructors[i].last_name.toUpperCase()+" - "+(list.Instructors[i].first_name.length+list.Instructors[i].last_name.length));
	}
}
studentRoster(students);
userList(users);