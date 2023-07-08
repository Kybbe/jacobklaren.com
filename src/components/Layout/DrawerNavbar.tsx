"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Drawer from "react-modern-drawer";
import { useAppSelector } from "@/hooks/redux/useAppSelector";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "./ThemeSwitcher";
import SpinningLetterWords from "../SpinningLetterWords";
import "react-modern-drawer/dist/index.css";
import DrawerButton from "./DrawerButton";
import styles from "./DrawerNavbar.module.scss";

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
	}, [pathname]);

	useEffect(() => {
		document.body.style.overflow = open ? "hidden" : "auto";
	}, [open]);

	return (
		<div>
			<DrawerButton open={open} toggleOpen={toggleOpen} />

			<Drawer
				open={open}
				onClose={toggleOpen}
				direction="right"
				className={`${styles.hamburgerMenu} ${
					theme === "light" ? styles.lightenBackground : ""
				}`}
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
			</Drawer>
		</div>
	);
}
