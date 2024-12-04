import activities from "../db.json";
import polarisatie from "../polarisatiedb.json"

const now = new Date().getTime() - 86400000;
const nextWeek = now + 604800000;


// Filtered activities that are expired
export const filteredExpiredActivities = [];

//Filter expired activities
const filterActivitiesInThePast = () => {
  activities.activities.forEach((act) => {
    if (new Date(act.closing_date).getTime() < now) {
      filteredExpiredActivities.push({
          id: act.id,
          title: act.title,
          image: act.image,
          date: act.starting_date
      });
    }
   });
};

filterActivitiesInThePast();


//Filtered activities that are upcoming
export const upcomingActivities = [];

// Filter Running and upcoming activities
const upcomingAndRunningActivities = () => {
   activities.activities.forEach((act) => {
 if (new Date(act.closing_date).getTime() >= now) {
   upcomingActivities.push(act);
 }
})
}

upcomingAndRunningActivities();


//Filter activities by coming week
const filteredActivitiesByWeek = [];

const filterByDate = () => {
  activities.activities.forEach((act) => {
    const dates = act.date.dates;

    dates.forEach((date) => {
      if (
        new Date(date).getTime() >= now &&
        new Date(date).getTime() < nextWeek
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

export const filteredByWeek = filteredActivitiesByWeek.toSorted(
  (a, b) => new Date(a.date) - new Date(b.date)
);


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
//     filteredActivitiesByWeek.push(...separateRelevantDates(activity));
// });

// //Output the separated relevant dates
