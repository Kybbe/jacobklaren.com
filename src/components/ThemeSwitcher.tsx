"use client";

import { useAppDispatch } from "@/hooks/redux/useAppDispatch";
import { useAppSelector } from "@/hooks/redux/useAppSelector";
import { setTheme, toggleTheme } from "@/store/slices/uiSlice";
import { useEffect } from "react";
import styled from "styled-components";

export default function ThemeSwitcher() {
	const theme = useAppSelector(state => state.ui.theme);

	const dispatch = useAppDispatch();

	function switchTheme() {
		document.body.classList.toggle("dark");

		dispatch(toggleTheme());
	}

	function checkPrefersColorScheme() {
		if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			document.body.classList.add("dark");
			dispatch(setTheme("dark"));
		}
	}

	useEffect(() => {
		checkPrefersColorScheme();
	}, []);

	return (
		<Container className="themeswitcher">
			<Button type="button" onClick={() => switchTheme()}>
				{theme === "dark" ? "☀️" : "🌙"}
			</Button>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 1rem;
`;

const Button = styled.button`
	background-color: rgb(var(--background));
	border: none;
	color: rgb(var(--text));
	border-radius: 50%;
	width: 1.7em;
	height: 1.7em;
	font-size: 1.4rem;
	display: flex;
	align-items: center;
	justify-content: center;

	cursor: pointer;

	transition: background-color 0.2s ease-in-out;

	&:hover,
	&:focus {
		background-color: rgb(var(--accent));
	}
`;
