let data=[1,2,3,4,5];
let data1=[6,7,8,9,10,11]
console.log(data.push(2));
console.log(data);//data is added at last (appending )
//last in first out
data.pop()//last element got deleted
console.log(data);
console.log("///////////////////shift method will remove one elemnent from first");
data.shift();
console.log(data);
console.log("///////////////////unshift method will add  elemnent at first");
data.unshift(1);
console.log(data);
console.log("///////////////////splice will take 3 arguments like (1-which index it should remove elements,2-how many elements it should remove ,3-add items ");
data.splice(1);//iit delete the elements from index 1 tolast index
console.log(data);
data1.splice(1,2);//iit delete the elements from index 1 until 2 elements
console.log(data1);
data1.splice(1,2,3);//iit delete the elements from index 1 until 2 elements and add 3 as a element
console.log(data1);


