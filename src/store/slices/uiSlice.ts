import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	darkTheme: false,
	cursorVariant: "default",
};

const uiSlice = createSlice({
	name: "ui",
	initialState,
	reducers: {
		toggleTheme: state => {
			state.darkTheme = !state.darkTheme;
		},
		setCursorVariant: (state, action) => {
			state.cursorVariant = action.payload;
		},
	},
});

export const { toggleTheme, setCursorVariant } = uiSlice.actions;
export default uiSlice;
