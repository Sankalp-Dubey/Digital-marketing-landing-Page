import { createSlice } from "@reduxjs/toolkit";
// utils
import axios from "@/utils/axios";

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: null,
  contactUs: [],
};

const slice = createSlice({
  name: "contactUs",
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // START Product LOADING
    PostContactUsSuccess(state, action) {
      state.contactUs = action.payload.data;
    },
  },
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export function PostContactUs(values) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.post("/api/contact_us", values);
      dispatch(slice.actions.PostContactUsSuccess(response?.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
