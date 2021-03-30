// i keep my request functions in this folder to centralise the location i make my calls
// it can get messy making calls in lots of different places.
// if i wanted to, i could add any type of request function here and use it via import wherever i need it.

import axios from "axios";
import { axiosConfigGet, axiosConfigPost } from "./config";

export const get = async (url) => {
  try {
    const response = await axios.get(url, axiosConfigGet);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const post = async (url, body) => {
  try {
    const response = await axios.post(url, body, axiosConfigPost);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
