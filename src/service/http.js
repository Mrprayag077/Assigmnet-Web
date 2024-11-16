import axios from "axios";

const API_URL =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=7515284b44a1404a9a0ff5de260b0f02";

export const fetchTopHeadlines = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log(response.data)
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching top headlines:", error);
    throw error;
  }
};
