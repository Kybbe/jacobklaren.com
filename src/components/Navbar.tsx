"use client";

import Link from "next/link";
import styled from "styled-components";
import ThemeSwitcher from "./ThemeSwitcher";
import SpinningLetterWords from "./SpinningLetterWords";

export default function Navbar() {
	return (
		<Nav>
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
		</Nav>
	);
}

const Nav = styled.nav`
	background: transparent;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1em;

	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	z-index: 100;

	height: 100%;

	backdrop-filter: blur(10px);
	box-shadow: 0px 0px 10px rgba(var(--text), 0.25);

	> .themeswitcher {
		position: absolute;
		bottom: 1em;
		right: 1em;
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

		@media (min-width: 900px) {
			flex-direction: row;
			align-items: center;
			justify-content: flex-end;
			gap: 1em;
		}
	}

	@media (min-width: 500px) {
		left: auto;
	}

	@media (min-width: 900px) {
		background-color: rgba(var(--background), 0.75);

		flex-direction: row;

		position: fixed;
		top: 0;
		bottom: auto;
		right: 0;
		left: 0;

		height: var(--navbar-height);
		width: 100%;

		> .themeswitcher {
			top: calc(var(--navbar-height) / 2);
			transform: translateY(-50%);
		}
	}

	h1 {
		color: rgb(var(--accent));
		padding: 1em 2em;
	}
`;

const UL = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	gap: 1em;

	list-style: none;

	@media (min-width: 900px) {
		flex-direction: row;
		justify-content: space-between;
	}
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

	@media (min-width: 900px) {
		font-size: 1.5em;
	}
`;
