//filter :it will filter the values based on some condition
//for loop will print the array individually

let n=[1,2,3,4,5,6];
console.log(n.filter(m => m%2===0));//filter methods only prints even numbers in a array
let a=[11,12,13,14,15];
a.filter(b =>b%2===0)
.forEach(c =>{ //print elements line by line
    console.log(c);
})
//map will take a value and change a value

n.filter(m =>m%2===0)
.map(m =>m*2)//double the even numbers which r filtered from filter method
.forEach(m=>
    {
        console.log(m);
    })
    let r=n.filter(m =>m%2===0)
    .map(m =>m*2)//double the even numbers which r filtered from filter method
    .reduce((a,b) =>a+b); //it will reduce the array values to one value
    console.log(r);


    //repository name for this project is javascripts
