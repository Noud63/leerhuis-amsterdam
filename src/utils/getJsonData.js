import data from "../db.json"
import axios from 'axios'
import { upcomingActivities } from "./filterByDate";

//Simulate fetch
const getJsonData = (callback) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(callback());
    }, 3000);
  });
};

const waitasecond = () => {
  const data = upcomingActivities
  return data
};

export const getData = async () => {
  const act = await getJsonData(waitasecond)
  console.log(act)
}
