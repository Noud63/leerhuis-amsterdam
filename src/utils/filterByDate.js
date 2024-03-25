import activities from "../db.json";

const now = new Date().getTime() - 86400000;
const nextWeek = now + 604800000;

// Filtered activities that are expired
export const filteredExpiredActivities = [];

//Filtered activities that are upcoming
export const upcomingActivities = []

//Filter activities
export const filterActivitiesInThePast = () => {
  activities.activities.forEach((act) => {
      if(new Date(act.closing_date).getTime() < now){
        filteredExpiredActivities.push(act)
      }
      if (new Date(act.closing_date).getTime() >= now) {
        upcomingActivities.push(act);
      }
  });
};

filterActivitiesInThePast();


// ------------ 1 ------------ // 

//Filter activities by coming week
export const filteredActivitiesByWeek = [];

export const filterByDate = () => {
  activities.activities.forEach((act) => {
    const dates = act.date.dates;

    dates.forEach((date) => {
     
      if (
        (new Date(date).getTime() >= now && new Date(date).getTime() < nextWeek)
      ) {
        filteredActivitiesByWeek.push({
          id: act.id,
          date: date,
          title: act.title,
          image: act.image,
        });
      }
    });
  });
};

filterByDate();


// ------------ 2 ------------ // 

// --Returns only the activities! -- //

// export const filteredByDates = (activities) => {
//   return activities.activities.filter((activity) => {
//     return activity.date.dates.some(
//       (date) =>{
// if(new Date(date).getTime() >= now && new Date(date).getTime() < nextWeek){
  
//   return  activity ;
//       }
//     });
//   });
// };


// filteredByDates(activities);
// console.log(filteredByDates(activities))


// ------------ 3 ChatGpt------------ //

// ---------------- Get the current date --------------- //
// const today = new Date();

// // Calculate the date one week from now
// const oneWeekFromNow = new Date(today);
// oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7);

// //---------------- Filter activities within a week from now ------------------- //
// const activitiesWithinWeek = activities.activities.filter(activity => {
//     const activityDates = activity.date.dates.map(date => new Date(date));
//     console.log(activityDates)
    
//     return activityDates.some(date => date >= today && date <= oneWeekFromNow);
// });

// //---------------- Function to separate relevant dates as an array of objects ---------------------- //
// const separateRelevantDates = activity => {
//     const relevantDates = activity.date.dates.filter(date => {
//         const activityDate = new Date(date);
//         return activityDate >= today && activityDate <= oneWeekFromNow;
//     });

//     return relevantDates.map(date => {
//         return {
//           id: activity.id,
//           title: activity.title,
//           date: date,
//           image: activity.image,
//         };
//     });
// };

// //----------- Array to hold separated relevant dates ----------------- //
// export const filteredActivitiesByWeek = [];

// // Iterate through filtered activities and separate relevant dates
// activitiesWithinWeek.forEach(activity => {
//   console.log(separateRelevantDates(activity));
//     filteredActivitiesByWeek.push(...separateRelevantDates(activity));
// });

// //Output the separated relevant dates
// console.log(filteredActivitiesByWeek);




