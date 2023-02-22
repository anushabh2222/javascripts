function add(a,b)
{
    console.log(a+b);
}
add(10,20);
add(40,30);
add(10,40);

function greeting()
{
    return "hello world";

}
let str=greeting();
console.log(str);



console.log("//////////////passing a value as a text");
function greet(user)
{
    return `hello ${user}`;
}
let user="aish";
let str1=greet(user);
console.log(str1);