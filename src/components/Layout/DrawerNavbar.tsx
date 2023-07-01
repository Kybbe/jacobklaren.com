"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Drawer from "react-modern-drawer";
import { useAppSelector } from "@/hooks/redux/useAppSelector";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "./ThemeSwitcher";
import SpinningLetterWords from "../SpinningLetterWords";
import "react-modern-drawer/dist/index.css";
import DrawerButton from "./DrawerButton";

export default function DrawerNavbar() {
	const [open, setOpen] = useState(false);
	const theme = useAppSelector(state => state.ui.theme);
	const pathname = usePathname();

	const isCurrentPath = (path: string) => pathname === path;
	const toggleOpen = () => setOpen(!open);

	useEffect(() => {
		const handleResize = () => {
			const screenBig = window.innerWidth > 900;

			if (screenBig) {
				setOpen(false);
			}
		};

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		setOpen(false);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [window.location.pathname]);

	return (
		<Container lightenBackground={theme === "light"}>
			<DrawerButton open={open} toggleOpen={toggleOpen} />

			<Drawer
				open={open}
				onClose={toggleOpen}
				direction="right"
				className="hamburgerMenu"
				lockBackgroundScroll
				size={300}
			>
				<Link
					href="/"
					style={{
						textDecoration: "none",
					}}
				>
					<h1>Jacob Klarén</h1>
				</Link>

				<div className="right">
					<UL>
						<li>
							<NavLink href="/">
								<SpinningLetterWords
									word="Home"
									underline={isCurrentPath("/") ? "none" : "hover"}
									color={
										isCurrentPath("/")
											? "rgb(var(--accent))"
											: "rgb(var(--text))"
									}
									disabled={isCurrentPath("/")}
								/>
							</NavLink>
						</li>
						<li>
							<NavLink href="/contact">
								<SpinningLetterWords
									word="Contact"
									underline={isCurrentPath("/contact") ? "none" : "hover"}
									color={
										isCurrentPath("/contact")
											? "rgb(var(--accent))"
											: "rgb(var(--text))"
									}
									disabled={isCurrentPath("/contact")}
								/>
							</NavLink>
						</li>
						<li>
							<NavLink href="/about">
								<SpinningLetterWords
									word="About"
									underline={isCurrentPath("/about") ? "none" : "hover"}
									color={
										isCurrentPath("/about")
											? "rgb(var(--accent))"
											: "rgb(var(--text))"
									}
									disabled={isCurrentPath("/about")}
								/>
							</NavLink>
						</li>
						<li>
							<NavLink href="/photos">
								<SpinningLetterWords
									word="Photos"
									underline={isCurrentPath("/photos") ? "none" : "hover"}
									color={
										isCurrentPath("/photos")
											? "rgb(var(--accent))"
											: "rgb(var(--text))"
									}
									disabled={isCurrentPath("/photos")}
								/>
							</NavLink>
						</li>
					</UL>

					<ThemeSwitcher />
				</div>
			</Drawer>
		</Container>
	);
}

const Container = styled.div<{ lightenBackground?: boolean }>`
	.hamburgerMenu {
		background: transparent;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1em;

		padding-top: 0.5em;

		backdrop-filter: ${({ lightenBackground }) =>
			lightenBackground ? "brightness(1.5) blur(10px)" : "blur(10px)"};
		box-shadow: 0px 0px 10px rgba(var(--text), 0.25);

		> .themeswitcher {
			position: absolute;
			bottom: 1em;
			right: 1em;
		}

		h1 {
			color: rgb(var(--accent));
			padding: 0.2em 1em;
			white-space: nowrap;
		}

		> .right {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			gap: 1em;
			flex: 1;
			width: 100%;

			> .themeswitcher {
				align-self: flex-end;
				padding: 0.5em;
			}
		}

		@media (max-width: 600px) {
			width: 100% !important;
		}
	}
`;

const UL = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	gap: 1em;

	list-style: none;
`;

const NavLink = styled(Link)`
	color: var(--color-text);
	text-decoration: none;
	font-weight: 600;
	font-size: 2em;

	&:hover {
		color: rgb(var(--color-accent));
		text-decoration: underline;
	}
`;
