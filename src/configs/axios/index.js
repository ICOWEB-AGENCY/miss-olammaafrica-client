import Axios from "axios";
import baseURL from "../baseURL";

export const axios = Axios.create({
  baseURL: baseURL,
  timeout: 5000,
});
