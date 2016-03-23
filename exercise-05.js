var student = {
  name: "John",
  email: "john@gmail.com",
  phone: "518-444-5555",
  address: {
    number: 33,
    street: "Christopher St",
    city: "New York",
    state: "NY",
    zip: "12345"
  },
  classes: [
    "math",
    "history",
    "design",
    "accounting" 
  ],
  printClasses: function() {
    for(var i in this.classes) {
      console.log(this.classes[i]);
    }
  }
};

student.printClasses();

/* 

Exercise 05: 

    * Add an attribute "printAddress" 
    * Make it to be a function that prints the full student's address.

*/
