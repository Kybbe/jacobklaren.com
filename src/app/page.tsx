import HeroSection from "@/components/Home/HeroSection";
import Showcase from "@/components/Showcase";

export default function Home() {
	return (
		<main>
			<HeroSection />

			<Showcase
				title="Scouterna"
				description="The Scouts are a democratic children's and youth organization based on the scout method. The Scouts are non-religious and welcome everyone who can stand behind their core values."
				images={[
					"/images/projects/Scouterna.webp",
					"/images/projects/Scouterna-inside.webp",
					"/images/projects/Scouterna-inside-2.webp",
					"/images/projects/Scouterna-inside-3.webp",
				]}
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
				projectRole="Fullstack Developer"
			/>
			<Showcase
				title="Mimbly"
				description="Mimbly is a cleantech company from Gothenburg. Starting in 2023, Mimbly designs and launches its laundry innovations in Gothenburg, Sweden. Their achievements over the years are what propels them from startup to scaleup."
				content="Mimbly is a cleantech company from Gothenburg. Starting in 2023, Mimbly designs and launches its laundry innovations in Gothenburg, Sweden. Their achievements over the years are what propels them from startup to scaleup."
				images={[
					"/images/projects/Mimbly.webp",
					"/images/projects/Mimbly-inside.webp",
				]}
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
				/* liveURL="https://mimbly-frontend.azurewebsites.net/" */
				projectRole="Frontend Developer"
			/>
			<Showcase
				title="FrontedgeIT.se"
				description="
				FrontedgeIT is an IT consulting company that offers consulting services in IT and system development. They have extensive experience in delivering IT solutions to both large and small companies."
				content="
				FrontedgeIT is an IT consulting company that offers consulting services in IT and system development. They have extensive experience in delivering IT solutions to both large and small companies."
				images={[
					"/images/projects/frontedgeit.webp",
					"/images/projects/FEIT-inside.webp",
					"/images/projects/FEIT-inside-2.webp",
					"/images/projects/FEIT-inside-3.webp",
				]}
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
				/* liveURL="https://www.frontedgeit.se/" */
				projectRole="Fullstack Developer"
			/>
			<Showcase
				title="I am a game"
				description="I am a game is a game that I created as a Degree Project and to learn Svelte, C#.net and SignalR."
				content="I am a game is a game that I created as a Degree Project and to learn Svelte, C#.net and SignalR."
				images={["/images/projects/iamagame.webp"]}
				technologies={[
					"Svelte",
					"TypeScript",
					"C#.net",
					"SignalR",
					"Javascript",
					"HTML",
					"CSS",
					"Fly.io hosting",
					"Github Actions",
				]}
				timespan="Jan 2021 - Jun 2021"
				/* liveURL="https://iamagame.fly.dev/" */
				githubURL="https://github.com/Hargaaya/IAmAGame-Frontend"
				projectRole="Fullstack Developer"
			/>
			<Showcase
				title="Foodlist"
				description="Foodlist is a web application that helps me keep track of my favorite recipes. I can add recipes, edit them and delete them. I can also change the amount of portions and get an updated list of ingredient amounts."
				content="Foodlist is a web application that helps me keep track of my favorite recipes. I can add recipes, edit them and delete them. I can also change the amount of portions and get an updated list of ingredient amounts."
				images={["/images/projects/foodlist.webp"]}
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
				description="Scruit is a Kanban board similar to Github Projects. Scruit is my first application that uses drag and drop."
				content="Scruit is a Kanban board similar to Github Projects. Scruit is my first application that uses drag and drop."
				images={["/images/projects/Scruit.webp"]}
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
			<Showcase
				title="Todo"
				description="Todo is a todo application that allows multiple lists, saving everything locally."
				content="Todo is a todo application that allows multiple lists, saving everything locally."
				images={["/images/projects/todo.webp"]}
				technologies={["Vanilla JS", "Javascript", "HTML", "CSS"]}
				timespan="Aug 2021 - Aug 2021"
				liveURL="http://todo.jacobklaren.com/"
				githubURL="https://github.com/Kybbe/To-do"
				projectRole="Frontend Developer"
			/>
			<Showcase
				title="Frontedge dashboard"
				description="Frontedge dashboard is a small project for a spare screen at the Frontedge IT office. The dashboard shows the weather, the time, the date and departures from the nearest bus stop in realtime."
				content="Frontedge dashboard is a small project for a spare screen at the Frontedge IT office. The dashboard shows the weather, the time, the date and departures from the nearest bus stop in realtime."
				images={["/images/projects/FEITDashboard.webp"]}
				technologies={[
					"React",
					"TypeScript",
					"Javascript",
					"REST API",
					"HTML",
					"CSS",
				]}
				timespan="Mar 2022 - Mar 2022"
				/* liveURL="https://feit-dashboard.fly.dev/" */
				projectRole="Fullstack Developer"
			/>
			
		</main>
	);
}
