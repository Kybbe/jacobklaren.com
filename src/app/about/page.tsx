import FadingCarousel from "@/components/About/FadingCarousel";
import Image from "next/image";
import styles from "./about.module.scss";

export default function About() {
	return (
		<div className={styles.container}>
			<section className={styles.headerSection}>
				<h1 className={styles.mainTitle}>
					I'm your{" "}
					<span className={styles.spiderman}>friendly neighborhood</span> web
					developer and I'm here to help you with your next project.
				</h1>
			</section>

			<section className={`${styles.section} ${styles.column}`}>
				<h1 className={styles.title}>What I do and why I do it</h1>

				<p className={styles.text}>
					I'm a full-stack web developer with a passion for creating beautiful,
					accessible and functional websites. By combining my UI/UX skills, my
					knowledge of web development and my passion for creating, I can create
					websites that both perform well and look great.
				</p>
			</section>

			<section className={styles.section}>
				<div className={styles.textPart}>
					<h1 className={styles.title}>About me outside of programming</h1>

					<p className={styles.text}>
						I'm 23 years old and I live in Gothenburg Sweden with my girlfriend.
						I love to play video games, watch movies and hang out with friends.
						I also love to bike and working out when there is time for it.
					</p>
				</div>

				<div className={styles.imagePart}>
					<FadingCarousel>
						<Image
							src="/images/jacob/Jacob1.webp"
							alt="image 1"
							width={500}
							height={350}
							style={{
								borderRadius: "0.5em",
								width: "100%",
							}}
						/>
						<Image
							src="/images/jacob/Jacob2.webp"
							alt="image 2"
							width={500}
							height={350}
							style={{
								borderRadius: "0.5em",
								width: "100%",
							}}
						/>
						<Image
							src="/images/jacob/Jacob3.webp"
							alt="image 3"
							width={500}
							height={350}
							style={{
								borderRadius: "0.5em",
								width: "100%",
							}}
						/>
					</FadingCarousel>
				</div>
			</section>
		</div>
	);
}
