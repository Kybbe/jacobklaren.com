"use client";

import { useAppDispatch } from "@/hooks/redux/useAppDispatch";
import { useAppSelector } from "@/hooks/redux/useAppSelector";
import { setColorTheme, setTheme, toggleTheme } from "@/store/slices/uiSlice";
import { useEffect } from "react";
import styles from "./ThemeSwitcher.module.scss";

const darkThemeColors = [
	"purple",
	"yellow",
	"blue",
	"red",
	"green",
	"pink",
];
const lightThemeColors = [
	"purple",
	"blue",
	"red",
	"green",
	"pink",
];

function getNextColorTheme(currentColor: string, isDarkTheme: boolean) {
	const currentIndex = isDarkTheme ? darkThemeColors.indexOf(currentColor) : lightThemeColors.indexOf(currentColor);
	const nextIndex = (currentIndex + 1) % (isDarkTheme ? darkThemeColors.length : lightThemeColors.length);
	return isDarkTheme ? darkThemeColors[nextIndex] : lightThemeColors[nextIndex];
}

export default function ThemeSwitcher() {
	const theme = useAppSelector(state => state.ui.theme);
	const colorTheme = useAppSelector(state => state.ui.colorTheme);

	const dispatch = useAppDispatch();

	function switchTheme() {
		document.body.classList.toggle("dark");

		dispatch(toggleTheme());
	}

	function switchColorTheme() {
		console.log("Switching color theme, current:", colorTheme);
		const nextColor = getNextColorTheme(colorTheme, theme === "dark");
		console.log("Next color theme:", nextColor);
		document.body.classList.remove(colorTheme);
		document.body.classList.add(nextColor);

		dispatch(setColorTheme(nextColor));
	}

	useEffect(() => {
		function checkPrefersDarkMode() {
			if (theme === "dark") {
				document.body.classList.add("dark");
			}

			if (
				window.matchMedia("(prefers-color-scheme: dark)").matches &&
				theme === ""
			) {
				document.body.classList.add("dark");
				dispatch(setTheme("dark"));
			} else if (
				window.matchMedia("(prefers-color-scheme: light)").matches &&
				theme === ""
			) {
				document.body.classList.remove("dark");
				dispatch(setTheme("light"));
			}
		}

		checkPrefersDarkMode();
	}, [theme, dispatch]);

	return (
		<div className={styles.container}>
			<button
				className={styles.button}
				type="button"
				onClick={() => switchTheme()}
			>
				{theme === "dark" ? "☀️" : "🌙"}
			</button>
			<button
				className={`${styles.colorButton} nextColor${getNextColorTheme(
					colorTheme,
					theme === "dark"
				)}`}
				type="button"
				onClick={() => switchColorTheme()}
			/>
		</div>
	);
}
