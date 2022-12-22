/* Create a new object called Student with age 20 , write a function which 
 prints the age of the student from 
 the student object.*/
// use BIND
 var Student = {
    age: 20
 }
 var printAge = function(){
    console.log(`Age of the Student is: ${this.age}`)
 }

 var bound = printAge.bind(Student)
 bound()
