let alien={
    name:"anu",
tech:'reactjs',
laptop:{ //complex object
    ram:4,
    cpu:'18',
    brand:'acer'
}}

console.log(alien);
for(let key in alien)
{
    console.log(key,alien[key])
}
for(let k in alien.laptop)
{
    console.log(k,alien.laptop[k])
}
console.log(alien.laptop.brand);