import styles from "./Footer.module.scss";

export default function Footer() {
	return (
		<footer className={styles.container}>
			<section className={styles.section}>
				<h2 className="title">Get in touch</h2>

				<p className={styles.text}>
					You can contact me by sending an email to{" "}
					<a className={styles.link} href="mailto:jacob.klaren@me.com">
						Jacob.klaren@me.com
					</a>{" "}
					or by filling out the{" "}
					<a className={styles.link} href="/contact">
						form on the contact page
					</a>
				</p>
			</section>

			<section className={styles.section}>
				<h2 className="title">Follow me</h2>

				<p className={styles.text}>
					You can follow me on{" "}
					<a
						className={styles.link}
						href="https://www.linkedin.com/in/jacob-klaren/"
					>
						LinkedIn
					</a>{" "}
					and{" "}
					<a className={styles.link} href="https://github.com/Kybbe">
						Github
					</a>
				</p>
			</section>

			<section className={styles.section}>
				<h2 className="title">My resume</h2>

				<p className={styles.text}>
					You can{" "}
					<a className={styles.link} href="/Jacob_Klaren_CV.pdf" download>
						download my resume
					</a>{" "}
					or{" "}
					<a
						className={styles.link}
						href="/Jacob_Klaren_CV.pdf"
						target="_blank"
					>
						view it directly in browser
					</a>
				</p>
			</section>

			<section className={styles.section}>
				<h2 className="title">Tech used</h2>

				<div className={styles.row}>
					<ul className={styles.ul}>
						<li className={styles.li}>Next.js</li>
						<li className={styles.li}>React</li>
						<li className={styles.li}>Vercel</li>
					</ul>
					<ul className={styles.ul}>
						<li className={styles.li}>Typescript</li>
						<li className={styles.li}>Framer Motion</li>
						<li className={styles.li}>Spline 3d</li>
					</ul>
					<ul className={styles.ul}>
						<li className={styles.li}>Styled Components</li>
						<li className={styles.li}>Nodemailer</li>
						<li className={styles.li}>Redux</li>
					</ul>
				</div>
			</section>
		</footer>
	);
}
