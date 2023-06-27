import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	darkTheme: false,
};

const uiSlice = createSlice({
	name: "ui",
	initialState,
	reducers: {
		toggleTheme: state => {
			state.darkTheme = !state.darkTheme;
		},
	},
});

export const { toggleTheme } = uiSlice.actions;
export default uiSlice;
