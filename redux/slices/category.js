// ** Redux Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ** Axios Imports
import axiosService from "../../services/axios";

export const getCategory = createAsyncThunk(
  "category/getCategory",
  async (data) => {
    const response = await axiosService.get(
      "/api/v1/rest/categories/paginate",
      { params: { shop_id: data.shop_id } }
    );
    return {
      data: response.data,
      totalPages: response.data.length,
    };
  }
);

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    categoryList: [],
    total: 1,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategory.fulfilled, (state, action) => {
      state.categoryList = action.payload.data.data;
      state.total = action.payload.totalPages;
    });
  },
});

export default categorySlice.reducer;
