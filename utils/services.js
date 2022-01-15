import axios from "axios";

export function getMenuData_One(ctx = null) {
  return axios
    .get(`https://login.guestie.se/api/profiles/330/menus`, ctx)
    .then(({ data }) => data.data)
    .catch((err) => console.error(err));
}

//These are test events from mughalempire api, just to test behaviour with different fonts and stylings
export function getEvents_One(ctx = null) {
  return axios
    .get(`https://login.findie.se/api/profiles/251/events`, ctx)
    .then(({ data }) => data.data)
    .catch((err) => console.error(err));
}

export function getEvents_Two(ctx = null) {
  return axios
    .get(`https://login.findie.se/api/profiles/220/events/`, ctx)
    .then(({ data }) => data.data)
    .catch((err) => console.error(err));
} 
