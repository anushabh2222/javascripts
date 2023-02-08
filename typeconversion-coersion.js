/*type conversion*/
let a=8
console.log(a,typeof a)
a=String(a)
console.log( a   ,typeof a)

let y=true
console.log("y is " + !y)

let c=6
c=!c
console.log(c,typeof c)




/*type coersion*/
let x=8
console.log(x,typeof x)
x=x+''  //it becomes string now(concat)
console.log(x,typeof x)
x=x-2  //it becomes number now(js decides string can be converted to number and do subtraction)
console.log(x,typeof x)


let g=10
console.log(Boolean(g))
console.log(Boolean("anu")) //true for string and numbers except zero,null  and undefined


let h='4'
console.log(h,typeof(h))//string
h=+h+2
console.log(h,typeof(h))//+h converts like casting
console.log("123 anu")
console.log(parseInt("123 anu")) //only print integer out of it




