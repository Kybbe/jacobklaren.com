"use client";

import HeroSection from "@/components/HeroSection";
import Showcase from "@/components/Showcase";
import styles from "./page.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<HeroSection />

			<main className={styles.main}>
				<Showcase
					title="Scouterna"
					description="Scouterna är en demokratisk barn- och ungdomsorganisation som bygger på scoutmetoden. Scouterna är partipolitiskt och religiöst obundna och välkomnar alla som kan ställa sig bakom vår värdegrund."
					image="/images/scouterna.webp"
					content="Scouterna är en demokratisk barn- och ungdomsorganisation som bygger på scoutmetoden. Scouterna är partipolitiskt och religiöst obundna och välkomnar alla som kan ställa sig bakom vår värdegrund."
				/>
				<Showcase
					title="Scouterna"
					description="Scouterna är en demokratisk barn- och ungdomsorganisation som bygger på scoutmetoden. Scouterna är partipolitiskt och religiöst obundna och välkomnar alla som kan ställa sig bakom vår värdegrund."
					content="Scouterna är en demokratisk barn- och ungdomsorganisation som bygger på scoutmetoden. Scouterna är partipolitiskt och religiöst obundna och välkomnar alla som kan ställa sig bakom vår värdegrund."
					image="/images/scouterna.webp"
				/>
			</main>
		</div>
	);
}
