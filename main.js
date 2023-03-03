
let calculate = document.querySelector("#calculate");
let add = document.querySelector(".add");

function dis(num){
    calculate.value +=num;
}
function clr(){
    calculate.value="";
}
function del(){
    calculate.value=calculate.value.slice(0,-1);
}
function calcul(){
    
    try{
        calculate.value=eval(calculate.value);
    }
    catch{
        confirm("rajesh");
    }
}