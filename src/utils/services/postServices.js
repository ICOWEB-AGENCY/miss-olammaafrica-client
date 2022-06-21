import { axios } from "../../configs/axios";
import baseURL from "../../configs/baseURL";

export const postData = async (path, body) => {
  try {
    const { data } = await axios.post(baseURL + path, body);

    return data;
  } catch (error) {
    const outData = {};
    if (error.response) {
      console.log(1);
      outData.error = error.response.data;
      console.log(error.response.data);
    } else if (error.request) {
      console.log(2);
      console.log(error.request);
    } else {
      console.log(3);
      console.log(error.message);
    }
    return outData;
  }
};
