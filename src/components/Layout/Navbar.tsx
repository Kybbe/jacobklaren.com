"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.scss";
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

			<nav className={styles.nav}>
				<Link
					href="/"
					style={{
						textDecoration: "none",
					}}
				>
					<h1>Jacob Klarén</h1>
				</Link>

				<div className={styles.right}>
					<ul className={styles.ul}>
						<li>
							<Link className={styles.navLink} href="/">
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
							</Link>
						</li>
						<li>
							<Link className={styles.navLink} href="/contact">
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
							</Link>
						</li>
						<li>
							<Link className={styles.navLink} href="/about">
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
							</Link>
						</li>
					</ul>

					<ThemeSwitcher />
				</div>
			</nav>
		</>
	);
}
