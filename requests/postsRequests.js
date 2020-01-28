import axios from "axios";

const baseUrl =
  "https://us-central1-devmentes-3abbf.cloudfunctions.net/postsApi";

export const getPostsRequest = async () => {
  const response = await axios.get(`${baseUrl}/posts`);

  return response.data.data;
};

export const getPostRequest = async postId => {
  const response = await axios.get(`${baseUrl}/posts/${postId}`);
  return response.data.data;
};
