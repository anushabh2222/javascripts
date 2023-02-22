function greet(user)
{
    console.log(user);//accessing gloabl var from line 8
    let num=10;
    console.log(num); //local var:this can be only access within the funcn
    return `hello ${user}`;
}
let user="anu"; //gloabal var
let a=greet(user);
console.log(a);
console.log(num);//can't be access outside the function but global var can access within function and outside 