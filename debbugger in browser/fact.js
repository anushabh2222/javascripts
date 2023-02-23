function fact(n){
    if(n==0)
    {
        return 1;
    }
    else
    return n*fact(n-1);
} 
let r=fact(5);
console.log(r);