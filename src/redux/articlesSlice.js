// src/redux/articlesSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTopHeadlines } from "../service/http";

// Async thunk to fetch articles based on the category
export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async (category = "") => {
    const data = await fetchTopHeadlines(category);
    // Filtering out articles with the source name "[Removed]"
    return data.filter((article) => article.source.name !== "[Removed]");
  }
);

const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    articles: [], // Array to store articles
    loading: false, // Loading state
    error: null, // Error message (if any)
    selectedArticle: null, // Selected article for popup
  },
  reducers: {
    // Reducer to set the selected article
    setSelectedArticle: (state, action) => {
      state.selectedArticle = action.payload;
    },
    // Reducer to clear the selected article
    clearSelectedArticle: (state) => {
      state.selectedArticle = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // When fetching articles starts
      .addCase(fetchArticles.pending, (state) => {
        state.loading = true;
      })
      // When fetching articles succeeds
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.articles = action.payload;
        state.loading = false;
      })
      // When fetching articles fails
      .addCase(fetchArticles.rejected, (state) => {
        state.error = "Failed to load articles. Please try again later.";
        state.loading = false;
      });
  },
});

// Export the action creators for setting and clearing the selected article
export const { setSelectedArticle, clearSelectedArticle } =
  articlesSlice.actions;

// Export the reducer to be used in the store
export default articlesSlice.reducer;
