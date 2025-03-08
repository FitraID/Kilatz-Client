import axios from "axios";
import updateStructure from "../helper/structureHelper";
export const globalAPI = "https://api.bawanggorengcys.com/api/";

export async function postWithData(url, data) {
  try {
    const response = await axios.post(`${globalAPI}${url}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.status);
    // Assuming the server response has a structure like { status, info, message, data }
    const { status, info, message, data: responseData } = response.data;

    // Return the structured response
    return updateStructure(status, info, message, responseData);
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      const { status, data } = error.response;
      return updateStructure(
        status,
        "ERROR",
        data.message || "An error occurred",
        null
      );
    } else if (error.request) {
      // The request was made but no response was received
      const { status, data } = error.request;
      return updateStructure(
        status,
        "ERROR",
        data.message || "An error occurred",
        null
      );
    } else {
      // Something happened in setting up the request
      return updateStructure(500, "ERROR", error.message, null);
    }
  }
}
