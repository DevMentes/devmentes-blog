import axios from "axios";

const baseUrl =
  "https://us-central1-devmentes-3abbf.cloudfunctions.net/writersApi";

export const getWriterRequest = async writerId => {
  const response = await axios.get(`${baseUrl}/writers/${writerId}`);
  return response.data.data;
};
