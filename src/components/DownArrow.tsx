"use client";

import styles from "./DownArrow.module.scss";

export default function DownArrow() {
	return (
		<button
			type="button"
			className={styles.arrow}
			aria-label="Scroll down"
			onClick={() => {
				window.scrollTo({
					top: window.innerHeight,
					behavior: "smooth",
				});
			}}
		>
			<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					id="Vector"
					d="M12 7V17M12 17L16 13M12 17L8 13"
					stroke="rgb(var(--text))"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</button>
	);
}
