import axios from "axios";

// Function to fetch top headlines, optionally filtered by category
export const fetchTopHeadlines = async (category = "") => {
  const API_URL = category
    ? `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=7515284b44a1404a9a0ff5de260b0f02`
    : "https://newsapi.org/v2/top-headlines?country=us&apiKey=7515284b44a1404a9a0ff5de260b0f02"; // Default to US if no category

  try {
    const response = await axios.get(API_URL);
    console.log(API_URL, response.data);
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching top headlines:", error);
    throw error;
  }
};
