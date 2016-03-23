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
  },
 printAddress: function() {
   for(var j in this.address) {
    console.log(j + " : " + this.address[j]);
   }
  }
};

student.printAddress();
student.printClasses();

/* 

Exercise 06: 

    * Change the attributes of this particular student for other values.
    * Run the code to see the effects.

*/
