import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// API URLs
const defaultAPI_URL =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=7515284b44a1404a9a0ff5de260b0f02";
const categoryAPI_URL = (category) =>
  `https://newsapi.org/v2/top-headlines?country=de&category=${category}&apiKey=7515284b44a1404a9a0ff5de260b0f02`;

// Async thunk to fetch top headlines based on the category
export const fetchTopHeadlines = createAsyncThunk(
  "news/fetchTopHeadlines",
  async (category = null) => {
    const url = category ? categoryAPI_URL(category) : defaultAPI_URL;
    try {
      const response = await axios.get(url);
      return response.data.articles;
    } catch (error) {
      console.error("Error fetching top headlines:", error);
      throw error;
    }
  }
);

// Slice definition
const newsSlice = createSlice({
  name: "news",
  initialState: {
    articles: [],
    category: null,
    loading: false,
    error: null,
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopHeadlines.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTopHeadlines.fulfilled, (state, action) => {
        state.articles = action.payload;
        state.loading = false;
      })
      .addCase(fetchTopHeadlines.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

// Actions
export const { setCategory } = newsSlice.actions;

// Reducer
export default newsSlice.reducer;
