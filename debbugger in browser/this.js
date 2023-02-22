let laptop1={
    cpu:"i4",
    ram:14,
    getconfig:function()
    {
        console.log(laptop1.ram);
    }

}
laptop1.getconfig();
console.log("///////////////2nd object");
let laptop2={
    cpu:"i5",
    ram:15,
    getconfig:function()
    {
        console.log(laptop1.ram); //it refereing to first object which feels wrong
    }

}
laptop2.getconfig();
console.log("/////////////3rd object");
let laptop3={
    cpu:"i5",
    ram:18,
    getconfig:function()
    {
        console.log(this.ram); //it refereing to current object laptop3:use of this:refer to the current object
    }
    
}
laptop3.getconfig();
