import Link from "next/link";
import styles from "./CTAButton.module.scss";

export default function CTAButon() {
	return (
		<div>
			<Link className={styles.link} href="/contact">
				Contact me
			</Link>
		</div>
	);
}
