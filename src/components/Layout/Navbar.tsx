"use client";

import Link from "next/link";
import styled from "styled-components";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "./ThemeSwitcher";
import SpinningLetterWords from "../SpinningLetterWords";
import "react-modern-drawer/dist/index.css";
import DrawerNavbar from "./DrawerNavbar";

export default function Navbar() {
	const pathname = usePathname();

	const isCurrentPath = (path: string) => pathname === path;

	return (
		<>
			<DrawerNavbar />

			<Nav>
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
			</Nav>
		</>
	);
}

const Nav = styled.nav`
	background: transparent;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
	gap: 1em;

	width: 100%;

	backdrop-filter: blur(10px);
	box-shadow: 0px 0px 10px rgba(var(--text), 0.25);

	position: fixed;
	top: 0;
	z-index: 100;

	height: var(--navbar-height);

	> .themeswitcher {
		position: absolute;
		bottom: 1em;
		right: 1em;
	}

	> .right {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
		gap: 1em;
		flex: 1;
		width: 100%;

		> .themeswitcher {
			align-self: flex-end;
			padding: 0.5em;
		}
	}

	@media (min-width: 500px) {
		left: auto;
	}

	h1 {
		color: rgb(var(--accent));
		padding: 0.2em 1em;
		white-space: nowrap;
	}

	@media (max-width: 900px) {
		display: none;
	}
`;

const UL = styled.ul`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	gap: 1em;

	list-style: none;
`;

const NavLink = styled(Link)`
	color: var(--color-text);
	text-decoration: none;
	font-weight: 600;
	font-size: 1.5em;

	&:hover {
		color: rgb(var(--color-accent));
		text-decoration: underline;
	}

	&.active {
		color: rgb(var(--color-accent));
		text-decoration: underline;
	}
`;
