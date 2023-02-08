//monday:7am
//tuesday-friday:6am
//sunday:5am
//saturday:5:30am
let day="friday"
switch(day){
    case "monday":
        console.log("7am");
        break;
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
        console.log("6am");
        break;
    case "saturday":
        console.log("5:30 am");
        break;
    case "sunday":
        console.log("5am");
        break
    default:
        console.log("holiday");
}