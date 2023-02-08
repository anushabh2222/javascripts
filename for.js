for(i=1;i<=5;i++)
{
    console.log("hii",i);
}
console.log("/////////////////////////////////")

for(j=1;j<=5;j++)
{
    console.log("first loop",j);
    for(k=1;k<=5;k++)
    {
        console.log("second loop",k);
    }
}
//steps 
//first one value with outer loop will exceuted and enter into inner loop then execute all the values until the condition gets false
//then enter into outer loop consider second value and enter into inner loop again (inner loop initialize to first assigned value value)and same procedure