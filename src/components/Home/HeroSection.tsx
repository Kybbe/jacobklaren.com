import Image from "next/image";
import CTAButton from "./CTAButton";
import DownArrow from "../DownArrow";
import DownloadIcon from "../DownloadIcon";
import styles from "./HeroSection.module.scss";

export default function HeroSection() {
	return (
		<div className={styles.row}>
			<div
				className={styles.col}
				style={{
					padding: "0 1em",
				}}
			>
				<h1 className={styles.title}>
					Hi, my name is <span className={styles.accentText}>Jacob Klarén</span>
				</h1>
				<h2 className={styles.subtitle}>I'm a fullstack developer</h2>
				<h2 className={styles.subtitle}>
					I love web design, learning new things,
				</h2>
				<h2 className={styles.subtitle}>
					<span className={styles.accentText}>And people of course!</span>
				</h2>

				<br />

				<div className={styles.buttonContainer}>
					<CTAButton />

					<h3 className={styles.buttonDivider}>Or</h3>

					<a
						className={styles.downloadResumeButton}
						href="/files/JacobKlarenCV.pdf"
						download
					>
						<DownloadIcon color="rgb(var(--accent))" size="2em" />
						Download my resume
					</a>
				</div>
			</div>

			<div className={`${styles.col} imageContainerCol`}>
				<Image
					className={styles.styledImage}
					src="/images/jacob/hero.webp"
					width="500"
					height="500"
					alt="Picture of me"
				/>
			</div>

			<DownArrow />
		</div>
	);
}
