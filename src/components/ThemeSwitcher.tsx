"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";

export default function ThemeSwitcher() {
	const [theme, setTheme] = useState("");

	function switchTheme() {
		document.body.classList.toggle("dark");
		setTheme(theme === "dark" ? "light" : "dark");
	}

	function checkPrefersColorScheme() {
		if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			document.body.classList.add("dark");
			setTheme("dark");
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
