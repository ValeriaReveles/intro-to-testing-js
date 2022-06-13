// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// function sayHello(){
//     return "Hello, Jane!";
// }

// function sayHello(input){
//     if (input === "Alex"){
//         return "Hello, Alex!";
//     }else if (input === "Pat"){
//         return "Hello, Pat!"
//     }else{
//         return "Hello, Jane!"
//     }


//Exercise 6 Refactored function: Will return all red since test parameters are different.

function sayHello(input){
    return "Hello, " + input + "!";
}

sayHello("Alex");