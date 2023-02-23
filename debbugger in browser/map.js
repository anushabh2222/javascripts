let map=new Map();
map.set("anu","js");
map.set("shruthi","springboot");
console.log(map.keys());
console.log(map.get("anu"));
console.log(map.has("anu"));
for (let [k,v] of map)
{
    console.log(k,":",v);
}
map.forEach((v,k) => {//pass value and then key
    console.log(k,":",v);
    
});