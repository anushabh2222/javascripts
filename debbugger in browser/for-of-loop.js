let a=[];
a[0]=1;
a[99]=10;
for(let n of a)
{
    console.log(n);//it prints all elements in an array
}
for(let m in  a)
{
    console.log(m);//it prints all keys like indexes in an array
}
///for in loop suits of objects for fetching keys
//for of loop suits for fetching elements for a array

