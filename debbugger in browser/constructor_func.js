function Alien(name,tech)
{
    this.name=name;
    this.tech=tech;

    this.work=function(){   ///method inside the object
        console.log("i am debugging the code");
    }
}
let alien1=new Alien('anu','js');//new object
let alien2=new Alien('soundarya','java');//second new object
alien1.name="abhi";
console.log(alien1);
console.log(alien2);//change in one object will not reflect in other
alien.work(); //we can access the method with any object created
//the constructor function should start with capital letter