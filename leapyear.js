var year=2000;
if( year%400==0){
      console.log(year +" is a leap year");
    }
    else if(year%100!=0&&year%4==0)
    {
        console.log(year +" leap year");
    }
    else { 
        console.log(year+"not leap year ");
}