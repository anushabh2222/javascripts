function add(n1,n2,n3=3)
{
    return n1+n2+n3;
}
let a=add(2,3); // if we didn't pass any argumete for n3 it considers default argument
console.log(a);
let b=add(2,3,5);//when we pass argument it consider this only
console.log(b);