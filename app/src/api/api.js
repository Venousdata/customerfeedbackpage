import axios from "axios";
import { axiosConfig } from "./config";

export const get = async (url) => {
  try {
    const response = await axios.get(url, axiosConfig);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
