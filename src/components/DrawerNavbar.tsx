"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Drawer from "react-modern-drawer";
import ThemeSwitcher from "./ThemeSwitcher";
import SpinningLetterWords from "./SpinningLetterWords";
import "react-modern-drawer/dist/index.css";

export default function DrawerNavbar() {
	const [open, setOpen] = useState(false);

	const toggleOpen = () => setOpen(!open);

	useEffect(() => {
		// Close the drawer when the window is resized to be larger than 900px
		const handleResize = () => {
			if (window.innerWidth > 900) {
				setOpen(false);
			}
		};

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<Container>
			<MenuBtn type="button" onClick={toggleOpen}>
				Show
			</MenuBtn>

			<Drawer
				open={open}
				onClose={toggleOpen}
				direction="right"
				className="hamburgerMenu"
				lockBackgroundScroll
			>
				<Link href="/">
					<h1>Jacob Klarén</h1>
				</Link>

				<div className="right">
					<UL>
						<li>
							<NavLink href="/">
								<SpinningLetterWords word="Home" underline="hover" />
							</NavLink>
						</li>
						<li>
							<NavLink href="/about">
								<SpinningLetterWords word="About" underline="hover" />
							</NavLink>
						</li>
						<li>
							<NavLink href="/projects">
								<SpinningLetterWords word="Projects" underline="hover" />
							</NavLink>
						</li>
						<li>
							<NavLink href="/contact">
								<SpinningLetterWords word="Contact" underline="hover" />
							</NavLink>
						</li>
						<li>
							<NavLink href="/photos">
								<SpinningLetterWords word="Photos" underline="hover" />
							</NavLink>
						</li>
					</UL>

					<ThemeSwitcher />
				</div>
			</Drawer>
		</Container>
	);
}

const MenuBtn = styled.button`
	position: fixed;
	top: 1em;
	right: 1em;
	z-index: 100;

	background: transparent;
	border: none;
	color: var(--text);
	font-size: 1.5em;
	cursor: pointer;

	@media (min-width: 900px) {
		display: none;
	}
`;

const Container = styled.div`
	.hamburgerMenu {
		background: transparent;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1em;

		backdrop-filter: blur(10px);
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
