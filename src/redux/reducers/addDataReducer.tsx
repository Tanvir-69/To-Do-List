import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AddDataState {
  value: Array<Object>;
}

const initialState: AddDataState = {
  value: [],
};

export const AddDataSlice = createSlice({
  name: "addData",
  initialState,
  reducers: {
    addingToDoListData: (state, action: PayloadAction<Array<Object>>) => {
      state.value = action.payload;
    },
  },
});

export const { addingToDoListData } = AddDataSlice.actions;
export default AddDataSlice.reducer;
