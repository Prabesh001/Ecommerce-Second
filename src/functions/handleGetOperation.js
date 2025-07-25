import axios from "axios";
import { BASE_URL } from "../constants/constants";

const handleGetOperation = async (url) => {
  try {
    const response = await axios.get(`${BASE_URL}${url}`, {
      withCredentials: true,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export { handleGetOperation };
