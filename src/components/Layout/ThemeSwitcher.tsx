"use client";

import { useAppDispatch } from "@/hooks/redux/useAppDispatch";
import { useAppSelector } from "@/hooks/redux/useAppSelector";
import { setTheme, toggleTheme } from "@/store/slices/uiSlice";
import { useEffect } from "react";
import styles from "./ThemeSwitcher.module.scss";

export default function ThemeSwitcher() {
	const theme = useAppSelector(state => state.ui.theme);

	const dispatch = useAppDispatch();

	function switchTheme() {
		document.body.classList.toggle("dark");

		dispatch(toggleTheme());
	}

	function checkPrefersColorScheme() {
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

	useEffect(() => {
		checkPrefersColorScheme();
	}, [theme]);

	return (
		<div className={styles.container}>
			<button
				className={styles.button}
				type="button"
				onClick={() => switchTheme()}
			>
				{theme === "dark" ? "☀️" : "🌙"}
			</button>
		</div>
	);
}
