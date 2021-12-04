import axios from "axios";

export function getMenuData_One(ctx = null) {
  return axios
    .get(`https://login.findie.se/api/profiles/251/menus/`, ctx)
    .then(({ data }) => data.data)
    .catch((err) => console.error(err));
}

export function getMenuData_Two(ctx = null) {
  return axios
    .get(`https://login.findie.se/api/profiles/220/menus/`, ctx)
    .then(({ data }) => data.data)
    .catch((err) => console.error(err));
}

export function getEvents_One(ctx = null) {
  return axios
    .get(`https://login.findie.se/api/profiles/251/events/`, ctx)
    .then(({ data }) => data.data)
    .catch((err) => console.error(err));
}

export function getEvents_Two(ctx = null) {
  return axios
    .get(`https://login.findie.se/api/profiles/220/events/`, ctx)
    .then(({ data }) => data.data)
    .catch((err) => console.error(err));
}
