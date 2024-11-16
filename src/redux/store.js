// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./articlesSlice";

// Configure the store and add the articles slice
const store = configureStore({
  reducer: {
    articles: articlesReducer, // Articles slice reducer
  },
});

export default store;
