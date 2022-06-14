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


function isFive(x) {
   if(x == 5){
       return true;
   } else{
       return false;
   }
}


function isEven(input){
    if (input % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

function isVowel(input){
    if(input == "a" || "A"){
        return true;
    }else if (input == "y"){
        return false;
    }else{
        return false;
    }
}


