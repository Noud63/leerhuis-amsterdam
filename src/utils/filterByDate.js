import activities from "../db.json";


//------------ 1 ------------ // 

const now = new Date().getTime();
const nextWeek = now + 604800000;

export const filteredActivitiesByDate = [];

export const filterByDate = () => {
  activities.activities.forEach((act) => {
    const dates = act.date.dates;

    dates.forEach((date) => {
      if (
        new Date(date).getTime() > now &&
        new Date(date).getTime() < nextWeek
      ) {
        filteredActivitiesByDate.push({
          id: act.id,
          date,
          title: act.title,
        });
      }
    });
  });
};

filterByDate();

console.log(filteredActivitiesByDate);

//------------ 2 ------------ // 

// --Returns only activity! -- //

// export const filteredByDates = (activities) => {
//   return activities.activities.filter((activity) => {
//     return activity.date.dates.some(
//       (date) =>{
// if(new Date(date).getTime() > now && new Date(date).getTime() < nextWeek){
  
//   return  activity ;
//       }
//     });
//   });
// };


// filteredByDates(activities);
// console.log(filteredByDates(activities))


//------------ 3 ------------ //

// // Get the current date
// const today = new Date();

// // Calculate the date one week from now
// const oneWeekFromNow = new Date(today);
// oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7);

// // Filter activities within a week from now
// const activitiesWithinWeek = activities.activities.filter(activity => {
//     const activityDates = activity.date.dates.map(date => new Date(date));
//     console.log(activityDates)
    
//     return activityDates.some(date => date >= today && date <= oneWeekFromNow);
// });

// // Function to separate relevant dates as an array of objects
// const separateRelevantDates = activity => {
//     const relevantDates = activity.date.dates.filter(date => {
//         const activityDate = new Date(date);
//         return activityDate >= today && activityDate <= oneWeekFromNow;
//     });

//     return relevantDates.map(date => {
//         return {
//             id: activity.id,
//             title: activity.title,
//             date: date
//         };
//     });
// };



// // Array to hold separated relevant dates
// const separatedRelevantDates = [];

// // Iterate through filtered activities and separate relevant dates
// activitiesWithinWeek.forEach(activity => {
//   console.log(separateRelevantDates(activity));
//     separatedRelevantDates.push(...separateRelevantDates(activity));
// });

// Output the separated relevant dates
// console.log(separatedRelevantDates);




