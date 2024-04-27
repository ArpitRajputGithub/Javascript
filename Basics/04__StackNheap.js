//Stack --> copy of the value
//Heap --> reference of the value

//stack is used for primitive datatypes
//heap is used for non primitive datatypes
                            //HEAP
                            //example using objects
let myDetails = {
    name: "arpit",
    branch : "CSE"
}

 let hello = myDetails;
hello.name = "rajput"


console.log(myDetails.name);
console.log(hello.name);