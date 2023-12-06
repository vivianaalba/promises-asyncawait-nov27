/*
  Create a JavaScript function called addStudentToClass() that accepts an object representing a student with the following properties: name (a string) and age (a number).
  
  Inside the addStudentToClass() function, create a Promise that simulates adding the student to a class. The Promise should resolve after a random delay of 1 to 3 seconds.
  If the student's age is less than 18, reject the Promise with the message: "Student is too young for this class."
  If the student's age is 18 or older, resolve the Promise with the message: "Student added to the class."
  
  Create a function called registerStudent() that uses async/await to call addStudentToClass() and handle the Promise's resolution or rejection. If the Promise is resolved, log the success message to the console. If it is rejected, log the error message to the console.
  Create an array of student objects (at least 3) with different names and ages, and use a loop to register each student using the registerStudent() function
*/

let student = {
    name: "",
    age: 0,
  };
  
  const addStudentToClass = (student) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (student.age >= 18) {
          resolve(`Student added to the class.`);
        } else {
          reject(`Student is too young for this class.`);
        }
      }, 1000);
    });
  };
  
  async function registerStudent(student) {
    try {
      let registrationStatus = await addStudentToClass(student);
      console.log(registrationStatus);
    } catch (error) {
      console.log(error);
    }
  }
  
  // This code should sit at the bottom of your solution
  
  const students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 19 },
  ];
  
  for (const student of students) {
    registerStudent(student);
  }