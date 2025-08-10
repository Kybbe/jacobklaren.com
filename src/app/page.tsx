import HeroSection from "@/components/Home/HeroSection";
import Showcase from "@/components/Showcase";
import { TimelineWithScrollHandling } from "@/components/Timeline/Timeline";
import { showcases } from "./showcasesData";

export default function Home() {
	return (
		<main>
			<HeroSection />
			<div style={{ margin: "0 0 60px 0", position: "relative" }}>
				<TimelineWithScrollHandling />
			</div>
			{showcases.map(showcase => (
				<div id={`showcase-${showcase.id}`} key={showcase.id}>
					<Showcase
						title={showcase.title}
						description={showcase.description}
						content={showcase.content}
						images={showcase.images}
						technologies={showcase.technologies}
						timespan={showcase.timeline.label}
						liveURL={showcase.liveURL}
						githubURL={showcase.githubURL}
						projectRole={showcase.projectRole}
					/>
				</div>
			))}
		</main>
	);
}
