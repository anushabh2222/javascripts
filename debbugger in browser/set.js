//set is a class where it considered only unique values and it is unordered
let n=new Set("anusha");//it removes repeated values:it is splitting  anusha in to individual values and removed 1 a
n.add(1);
n.add("aryan");
n.add(1);
n.add("preethi")
console.log(n);
console.log(n.has(1));//whether 1 is present in set
console.log(n.has('a'));
console.log(n.has(12));
n.forEach(element => {
    console.log(element);
    
});
console.log(typeof  Set);
console.log(typeof n);
