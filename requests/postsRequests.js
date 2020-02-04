import axios from "axios";

const baseUrl =
  "https://us-central1-blog-devmentes.cloudfunctions.net/postsApi";

export const getPostsRequest = async () => {
  const response = await axios.get(`${baseUrl}/posts`);

  return response.data.data;
};

export const getPostRequest = async postId => {
  const response = await axios.get(`${baseUrl}/posts/${postId}`);
  return response.data.data;
};

export const getWriterPostsRequest = async writerId => {
  const response = await axios.get(`${baseUrl}/writers/${writerId}/posts`);
  return response.data.data;
};
