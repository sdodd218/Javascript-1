function getMotto(){
    return String(prompt("please enter your favorite phrase or motto"));
}

function getCount(){
    return parseFloat(prompt("please enter times you want phrase or motto displayed"));
}

function printMotto(Motto, Count){
    return getMotto() + getCount(); 
}

let Motto = getMotto();
let Count = getCount();
let print = printMotto(getMotto,getCount);

console.log (getMotto);
console.log (getCount);
console.log (printMotto);


