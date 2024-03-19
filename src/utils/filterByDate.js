import activities from "../db.json";

const now = new Date().getTime();
const nextWeek = now + 604800000;

export const filteredDates = []

export const filterByDate = () => {
   
  activities.activities.forEach((act) => {
    const dates = act.date.dates
     
    dates.forEach((date) => {
      if (
        new Date(date).getTime() > now &&
        new Date(date).getTime() < nextWeek
      ) {
        
      filteredDates.push({act, date})
      }
    });
    
  });
 
};

filterByDate()