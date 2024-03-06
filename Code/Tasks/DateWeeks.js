function pastTwelveWeeks() {
    const weeks = [];
  
    const currentDate = new Date();
    const day = currentDate.getDay();
  
    const daysFromMonday = (day + 6) % 7;
  
    const monday = new Date(currentDate);
    monday.setDate(currentDate.getDate() - daysFromMonday);

    for (let i = 0; i < 12; i++) {
      let startingDate = new Date(monday);
      let endingDate = new Date(startingDate);

      endingDate.setDate(startingDate.getDate() + 6);
  
      weeks.push({
        startingDate,
        endingDate,
      });

      monday.setDate(monday.getDate() - 7);
    }
  
    return weeks;
  }
  
  const twelveWeeks = pastTwelveWeeks();
  console.log(twelveWeeks);

// const date=new Date();
// date.setDate(1-5);
// console.log(date)


// [
//     {
//         start_date: "05-02-2024",
//         end_date: "08-02-2024"
//     },
//     {
//         start_date: "28-01-2024",
//         end_date: "04-02-2024"
//     }
// ]



//Setting Start Date to Monday of Current Week

// console.log(startDate.toLocaleDateString());
// console.log(endDate.toLocaleDateString());


// const calculateDateRange = ()=>{
//     const dateRanges = [];
//     const endDate = new Date();
//     const startDate = new Date();
//     startDate.setDate(endDate.getDate()-endDate.getDay()+1);

//     for(let i = 1; i <= 12; i++){
//         const dateRange = {
//             startDate: startDate.toLocaleDateString(),
//             endDate: endDate.toLocaleDateString(),
//         }
//         dateRanges.push(dateRange);
//         console.log(i+1, " Hargun: ",dateRanges);
//         endDate.setDate(startDate.getDate()-1);
//         startDate.setDate(endDate.getDate()-6);
//         console.log(startDate.toLocaleDateString(), endDate.toLocaleDateString());
//         const thisMonday = startDate.getDate();
//         endDate.setDate(thisMonday-1);
//         const previousSunday = endDate.getDate();
//         startDate.setDate(previousSunday-6);
//     }
//     // for(let i = 0; i < dateRanges.length; i++){
//     //     console.log(i+1, ": ",dateRanges[i]);
//     // }
// }

// calculateDateRange();
