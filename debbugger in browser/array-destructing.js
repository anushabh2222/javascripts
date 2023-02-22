let num=[1,2,3,4];
let [a,b,c,d]=num//array destructing
console.log(a,b);
let [m,n,,p]=num;//third element becomes empty
console.log(p);
//swapping of two numbers using array destructing
let x=10,y=20;
  [x,y]=[y,x]
console.log("x value is " +x +" and  y value is " +y);


///string in array and rest operator
let words="i am anusha from tumkur".split( ' ');//splitting into words by space
let [e,f,...g]=words;//rest operator
console.log(g);