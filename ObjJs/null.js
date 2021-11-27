function suma(a,b) {
 if(!a||!b){
    console.log("Debes intriducir 2  valores")
    return;
  }
 return a+b; 
}
const result = suma(2,2) ? suma(2,2):"no hay resultado"
//console.log(result)
function newSuma(a=0,b=0) {
  return a+b
}
//console.log(newSuma(2,2))
const sumaArrow = (a=0,b=0)=>a+b
console.log(sumaArrow(3))
