const elResult= document.querySelector(".result");

const elPromt1= Number(prompt("birinchi sonni kiriting"))
const elPromt2= Number(prompt("ikkinchi sonni kiriting"))


const a=[]
var sum=0

a.push(elPromt1)
a.push(elPromt2)

console.log(a);


if((typeof elPromt1  === "string")&& (typeof elPromt2  === "string")){
     alert("Iltimos son kiritng ")
}else{
    for(i of a){
        sum +=i
        elResult.textContent=(sum)
    }
}





























