// Write a function getDaysInMonth that takes a month (1-12) and a year and returns the number of days in that month.

// function getDaysInMonth(month,year){
//     if(month>=1 && month<=12){
//         let date = new Date(year,month,1,0,0,0,-7)
//         return date.getDate()
//     }  
//     else{
//         return "Month is Invalid"
//     }   
    
// }

function getDaysInMonth(month, year) {
    if (month >= 1 && month <= 12) {
        let date = new Date(year, month - 1, 1);
        let newDate=new Date(date.getFullYear(), date.getMonth() + 1, 0);
        return newDate.getDate();
    } else {
        return "Month is Invalid";
    }
}

console.log(getDaysInMonth(2,2023))
