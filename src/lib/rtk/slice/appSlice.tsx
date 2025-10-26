import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface AppSlice {
	counter: number;
}

const initialState: AppSlice = {
	counter: 0,
};

export const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		setCounter(state, action: PayloadAction<number>) {
			state.counter = action.payload;
		},
	},
});

export const { setCounter } = appSlice.actions;

export default appSlice.reducer;
