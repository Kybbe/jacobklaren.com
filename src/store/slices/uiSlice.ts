import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	theme: "" as "dark" | "light" | "",
	colorTheme: "purple" as "purple" | "yellow" | "blue" | "red" | "green" | "pink",
};

const uiSlice = createSlice({
	name: "ui",
	initialState,
	reducers: {
		toggleTheme: state => {
			state.theme = state.theme === "dark" ? "light" : "dark";
		},
		setTheme: (state, action) => {
			state.theme = action.payload;
		},
		setColorTheme: (state, action) => {
			state.colorTheme = action.payload;
		},
	},
});

export const { toggleTheme, setTheme, setColorTheme } = uiSlice.actions;
export default uiSlice;
