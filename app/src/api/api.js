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
