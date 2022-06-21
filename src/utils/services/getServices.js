import { axios } from "../../configs/axios";
import baseURL from "../../configs/baseURL";

export const getData = async (path) => {
  try {
    const { data } = await axios.get(baseURL + path);

    return data;
  } catch (error) {
    if (error.response) {
      console.log(1);
      console.log(error.response.data);
      throw new Error(error.response.data);
    } else if (error.request) {
      console.log(2);
      console.log(error.request);
    } else {
      console.log(3);
      console.log(error.message);
    }
    throw new Error();
  }
};
