let alien={
    name:"anu",
tech:'reactjs',
laptop:{
    ram:4,
    cpu:'18',
    brand:'acer'
}}
console.log(alien.laptop.brand);
console.log(alien.laptop.brand.length);
console.log(alien.laptop.brand?.length);//checks if brand exists areelse give undefined
console.log(alien);
delete alien.laptop;
console.log(alien);