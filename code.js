// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

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
    if(input === true){
        return "Hello, World!";
    }else if(input){
        return "Hello, " + input + "!";
    }else {
        return "Hello, World!";
    }
}


function isFive(){

}