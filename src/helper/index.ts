import axios from "axios";
const request_options = {
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
};
export const getClockTime = (date: Date) => {
  const dateHours = date.getHours();
  const dateMinutes = date.getMinutes();
  const dateSeconds = date.getSeconds();
  return `${dateHours > 12 ? dateHours - 12 : dateHours}:${dateMinutes > 9 ? "" : "0"}${dateMinutes}:${dateSeconds > 9 ? "" : "0"}${dateSeconds} ${
    dateHours < 12 ? "AM" : "PM"
  }`;
};

export const GET_REQUEST = async (endpoint: string, params?: any) => {
  try {
    const result = await axios.get(endpoint, request_options);
    return result;
  } catch (error) {
    console.log("GET_REQUEST ERROR:", error);
    return null;
  }
};

export const POST_REQUEST = async (endpoint: string, params: any) => {
  try {
    const result = await axios.post(endpoint, params, request_options);
    return result;
  } catch (error: any) {
    console.log("POST_REQUEST ERROR:", error);
    return null;
  }
};
