let a=[12,31,41,56,62,78];
a.forEach((element) => { //arrow function   forEach is a array method for printing all the elements in a array individually
    console.log(element);
    
});
let b=[10,20,30,40,50,60];
b.forEach((element,i,b) => {
    console.log(element,i,b); //it consider 3 arguments like elements to be printed,index and array name
});
