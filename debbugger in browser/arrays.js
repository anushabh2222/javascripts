let arr=[10,20,30];
console.log(arr,typeof arr);//[10,20,30] object
arr.push(40,50);
console.log(arr);
arr.pop();//last element got popped 
console.log(arr);
arr.pop(10);
console.log(arr);
console.log(arr.length);
console.log(arr[2]);//index starts with zero
console.log(arr[3]);

let names=['anu','aish','sound'];
names.push('amulya');
names[1]='aryan';//if you have 5 elements till 4th index ,then you add the name to the 6th index the 5th index shows empty set
console.log(names);//if we add the other name to the already assigned index it will override 



let data=['anu',6,{tech:'js'},function (){
    console.log("hello");
}]
console.log(data);
data[3]();   //we can have mixed type of data in array even function and key value pair too
