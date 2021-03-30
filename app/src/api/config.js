// this file contains request headers for GET/POST requests as well as the baseURL (to avoid repetition)
// these are then used in the api.js file to make axios requests

export const axiosConfigGet = {
  baseURL: "http://localhost:8080/",
  headers: {
    "Access-Control-Allow-Origin": "http://localhost:3000",
  },
};

export const axiosConfigPost = {
  baseURL: "http://localhost:8080/",
  headers: {
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Content-Type": "application/json",
  },
};
