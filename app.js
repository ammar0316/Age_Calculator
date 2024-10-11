var time = new Date();
var months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
var uMonth = prompt("write  your birth month in number or Months Name");
var uDay  = +prompt("write your birth day");
var uYear  = +prompt("write your birth year");
var cMonth = time.getMonth();
var cDay = time.getDay();
var cYear = time.getFullYear();
cMonth += 1;
cDay += 1;
var eMonth = cMonth - uMonth;
var eDay = cDay - uDay;
var eYear = cYear - uYear;

for ( var i = 0 ; i < months.length ; i++){
    if( uMonth === months[i]){
        uMonth = months.indexOf(uMonth)
        uMonth += 1;
        var eMonth = cMonth - uMonth;
    }
}

if(eMonth < 0){
    eMonth = eMonth + 12;
}
if  ( eDay < 0){

   var lastDay = new Date(cYear,cMonth,0).getDate();
   eDay = eDay + lastDay;
}


alert(`Dear! User you are ${eYear} years , ${eMonth} months and ${eDay} days old`);






