"use client";

import HeroSection from "@/components/HeroSection";
import Showcase from "@/components/Showcase";

export default function Home() {
	return (
		<main>
			<HeroSection />

			<Showcase
				title="Scouterna"
				description="Scouterna är en demokratisk barn- och ungdomsorganisation som bygger på scoutmetoden. Scouterna är partipolitiskt och religiöst obundna och välkomnar alla som kan ställa sig bakom vår värdegrund."
				image="/images/scouterna.webp"
				content="Scouterna är en demokratisk barn- och ungdomsorganisation som bygger på scoutmetoden. Scouterna är partipolitiskt och religiöst obundna och välkomnar alla som kan ställa sig bakom vår värdegrund."
				technologies={[
					"React",
					"Next.js",
					"TypeScript",
					"Javascript",
					"Styled Components",
					"HTML",
					"CSS",
					"Ant Design",
					"Mongoose",
					"MongoDB",
					"SWR",
					"Redux",
					"Azure",
					"SAML/OpenID",
					"Github Projects",
					"Github Actions",
					"Jest",
					"React Testing Library",
					"Docker",
					"Rest API",
					"GraphQL",
				]}
				timespan="Jan 2023 - Present"
				liveURL="https://q.scoutnet.se/"
				githubURL=""
				projectRole="Fullstack Developer"
			/>
			<Showcase
				title="Mimbly"
				description="Mimbly är Ett företag inom cleantech från Göteborg. Från och med 2023 utformar och lanserar Mimbly sina tvättinnovationer i Göteborg, Sverige. Deras prestationer under åren är det som driver dem från startup till scaleup."
				content="Mimbly är Ett företag inom cleantech från Göteborg. Från och med 2023 utformar och lanserar Mimbly sina tvättinnovationer i Göteborg, Sverige. Deras prestationer under åren är det som driver dem från startup till scaleup."
				image="/images/mimbly.webp"
				technologies={[
					"React",
					"Next.js",
					"TypeScript",
					"Javascript",
					"CSS Modules",
					"HTML",
					"CSS",
					"Azure DevOps",
					"SQL Server",
					"Redux",
					"Azure AD",
					"Github Actions",
					"Docker",
					"Rest API",
				]}
				timespan="Sep 2022 - Jan 2023"
				liveURL="https://mimbly-frontend.azurewebsites.net/"
				githubURL=""
				projectRole="Lead Frontend Developer"
			/>
			<Showcase
				title="FrontedgeIT.se"
				description="FrontedgeIT är ett IT-konsultbolag som erbjuder konsulttjänster inom IT och systemutveckling. De har lång erfarenhet av att leverera IT-lösningar till både stora och små företag."
				content="FrontedgeIT är ett IT-konsultbolag som erbjuder konsulttjänster inom IT och systemutveckling. De har lång erfarenhet av att leverera IT-lösningar till både stora och små företag."
				image="/images/frontedgeit.webp"
				technologies={[
					"React",
					"Next.js",
					"TypeScript",
					"Javascript",
					"Styled Components",
					"HTML",
					"CSS",
					"Directus (Headless CMS)",
					"Azure",
					"Github Actions",
					"Docker",
					"Rest API",
				]}
				timespan="Mar 2023 - Jun 2023"
				liveURL="https://www.frontedgeit.se/"
				githubURL=""
				projectRole="Fullstack Developer"
			/>
			<Showcase
				title="Foodlist"
				description="Foodlist är en webbapplikation som hjälper mig att hålla koll på mina favorit-recept. Jag kan lägga till recept, redigera dem och ta bort dem. Jag kan också ändra mängden portioner och få en uppdaterad lista av ingrediensers mängd."
				content="Foodlist är en webbapplikation som hjälper mig att hålla koll på mina favorit-recept. Jag kan lägga till recept, redigera dem och ta bort dem. Jag kan också ändra mängden portioner och få en uppdaterad lista av ingrediensers mängd."
				image="/images/foodlist.webp"
				technologies={[
					"Vue",
					"TypeScript",
					"Firebase",
					"Javascript",
					"HTML",
					"CSS",
					"Vite",
					"Firebase Auth",
					"Firebase Realtime Database",
					"Firebase Hosting",
					"Vuex",
				]}
				timespan="Nov 2021 - Mar 2022"
				liveURL="https://foodlist.jacobklaren.com/#/"
				githubURL="https://github.com/Kybbe/foodlist"
				projectRole="Fullstack Developer"
			/>
			<Showcase
				title="Scruit"
				description="Scruit är en Kanban board liknande Github Projects. Scruit är min första applikation som använder drag and drop."
				content="Scruit är en Kanban board liknande Github Projects. Scruit är min första applikation som använder drag and drop."
				image="/images/scruit.webp"
				technologies={[
					"React",
					"TypeScript",
					"React DnD",
					"Javascript",
					"HTML",
					"CSS",
					"Firebase",
					"React Color",
					"React Router",
				]}
				timespan="Jul 2022 - Apr 2022"
				liveURL="https://scruit-2.firebaseapp.com/"
				githubURL="https://github.com/Kybbe/scruit"
				projectRole="Fullstack Developer"
			/>
		</main>
	);
}
