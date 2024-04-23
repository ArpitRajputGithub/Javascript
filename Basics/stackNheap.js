//Stack --> copy of the value
//Heap --> reference of the value

let myDetails = {
    name: "arpit",
    branch : "CSE"
}

 let hello = myDetails;
hello.name = "rajput"


console.log(myDetails.name);
console.log(hello.name);