import axios from "axios";

const handlePostOperation = async (url, data) => {
  try {
    const response = await axios.post(url, data);
    return response;
  } catch (error) {
    return error;
  }
};

export { handlePostOperation };
