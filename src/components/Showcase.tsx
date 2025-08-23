"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import FadingCarousel from "./About/FadingCarousel";
import styles from "./Showcase.module.scss";

interface Props {
	title: string;
	description: string;
	images: string[];
	content: string;
	technologies: string[];
	timespan: string;
	liveURL?: string;
	githubURL?: string;
	projectRole: string;
}

export default function Showcase({
	title,
	description,
	images,
	content,
	technologies,
	timespan,
	liveURL,
	githubURL,
	projectRole,
}: Props) {
	return (
		<motion.section
			className={styles.section}
			initial={{
				opacity: 0,
				marginTop: 100,
			}}
			whileInView={{
				opacity: 1,
				marginTop: 0,
			}}
			transition={{ duration: 1 }}
			viewport={{ once: true }}
		>
			<div className={styles.left}>
				<h2 className={styles.title}>{title}</h2>
				<div className={styles.imageContainer}>
					<FadingCarousel rotateInterval={4000}>
						{images.map((image: string) => (
							<Image
								className={styles.image}
								src={image}
								alt={title}
								width={1000}
								height={1000}
							/>
						))}
					</FadingCarousel>
				</div>

				<div className={styles.buttonContainer}>
					{/* <Link
						className={styles.viewButton}
						href={`/project/${title}`}
						target="_blank"
						rel="noreferrer"
					>
						Read more
					</Link> */}
					{liveURL && (
						<Link
							className={styles.viewButton}
							href={liveURL}
							target="_blank"
							rel="noreferrer"
						>
							View Live
						</Link>
					)}
				</div>

				<div className={styles.sectionContent}>
					<p>{description}</p>

					<ul className={styles.ul}>
						{technologies.map((technology) => (
							<li className={styles.li} key={technology}>
								{technology}
							</li>
						))}
					</ul>
					{/* <p>{content}</p> */}
				</div>
			</div>

			<div className={styles.right}>
				<p>{timespan}</p>
				<p>{projectRole}</p>
				{/* {liveURL && (
					<a
						className={styles.gitLiveLink}
						href={liveURL}
						target="_blank"
						rel="noreferrer"
					>
						<svg
							fill="currentcolor"
							viewBox="0 0 16 16"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M16 7.38A7.82 7.82 0 0 0 8 .5a7.82 7.82 0 0 0-8 6.88v1.24a7.82 7.82 0 0 0 8 6.88 7.82 7.82 0 0 0 8-6.88V7.38zm-1.25 0h-3a11.34 11.34 0 0 0-.43-2.54 7.6 7.6 0 0 0 1.75-1 6 6 0 0 1 1.65 3.54zm-9.18 0a9.69 9.69 0 0 1 .37-2.14A8.43 8.43 0 0 0 8 5.5a8.49 8.49 0 0 0 2.09-.26 10.2 10.2 0 0 1 .37 2.14zm4.92 1.24a9.59 9.59 0 0 1-.37 2.14 8.53 8.53 0 0 0-4.18 0 9.69 9.69 0 0 1-.37-2.14zm.4-5A11.82 11.82 0 0 0 10 2a6.89 6.89 0 0 1 2 1 6.57 6.57 0 0 1-1.14.66zm-2.6-1.86a10 10 0 0 1 1.38 2.3A7.63 7.63 0 0 1 8 4.25a7.56 7.56 0 0 1-1.67-.19 9.82 9.82 0 0 1 1.38-2.3h.58zm-3.15 1.9A6.57 6.57 0 0 1 4 3a6.89 6.89 0 0 1 2-1 10.38 10.38 0 0 0-.86 1.66zM3 3.83a7.6 7.6 0 0 0 1.75 1 11 11 0 0 0-.43 2.54h-3A6 6 0 0 1 3 3.83zM1.28 8.62h3a11 11 0 0 0 .43 2.54 7.6 7.6 0 0 0-1.75 1 6 6 0 0 1-1.68-3.54zm3.86 3.72A10.38 10.38 0 0 0 6 14a6.89 6.89 0 0 1-2-1 6.57 6.57 0 0 1 1.14-.66zm2.57 1.9a9.82 9.82 0 0 1-1.38-2.3 7.43 7.43 0 0 1 3.34 0 9.76 9.76 0 0 1-1.38 2.3h-.58zm3.15-1.9a6.57 6.57 0 0 1 1.19.66 7.24 7.24 0 0 1-2 1 11.48 11.48 0 0 0 .81-1.66zm2.14-.17a7.6 7.6 0 0 0-1.75-1 10.8 10.8 0 0 0 .43-2.54h3A6 6 0 0 1 13 12.17z" />
						</svg>
						<p>Live site</p>
					</a>
				)} */}
				{githubURL && (
					<a
						className={styles.gitLiveLink}
						href={githubURL}
						target="_blank"
						rel="noreferrer"
					>
						<svg
							height="32"
							width="32"
							aria-hidden="true"
							viewBox="0 0 16 16"
							version="1.1"
							data-view-component="true"
							className="octicon octicon-mark-github v-align-middle"
							fill="currentColor"
						>
							<path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
						</svg>

						<p>Github</p>
					</a>
				)}
			</div>
		</motion.section>
	);
}
