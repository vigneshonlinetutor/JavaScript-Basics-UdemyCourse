// Global Scope
const globalVar = "I am global Variable";

function globalFunction(){
    const localVar = "I am local variable";
    console.log(localVar);
    console.log(globalVar);
}

globalFunction();

if(true){
    let blockVar = "I am a block Variable"
    console.log(blockVar);
}


function hoistingExample(){
    console.log(x);
    var x = 10;
    console.log(x);
}

hoistingExample();

if(true){
    console.log(x);
    let x = 10;
    console.log(x);
}