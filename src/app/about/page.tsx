"use client";

import FadingCarousel from "@/components/About/FadingCarousel";
import Image from "next/image";
import styled from "styled-components";

export default function About() {
	return (
		<Container>
			<HeaderSection>
				<MainTitle>
					I'm your <Spiderman>friendly neighborhood</Spiderman> web developer
					and I'm here to help you with your next project.
				</MainTitle>
			</HeaderSection>

			<Section className="column">
				<Title>What I do and why I do it</Title>

				<Text>
					I'm a full-stack web developer with a passion for creating beautiful,
					accessible and functional websites. By combining my UI/UX skills, my
					knowledge of web development and my passion for creating, I can create
					websites that both perform well and look great.
				</Text>
			</Section>

			<Section>
				<TextPart>
					<Title>About me outside of programming</Title>

					<Text>
						I'm 23 years old and I live in Gothenburg Sweden with my girlfriend.
						I love to play video games, watch movies and hang out with friends.
						I also love to bike and working out when there is time for it.
					</Text>
				</TextPart>

				<ImagePart>
					<FadingCarousel>
						<Image
							src="/images/jacob/Jacob1.webp"
							alt="image 1"
							width={500}
							height={350}
							style={{
								borderRadius: "0.5em",
							}}
						/>
						<Image
							src="/images/jacob/Jacob2.webp"
							alt="image 2"
							width={500}
							height={350}
							style={{
								borderRadius: "0.5em",
							}}
						/>
						<Image
							src="/images/jacob/Jacob3.webp"
							alt="image 3"
							width={500}
							height={350}
							style={{
								borderRadius: "0.5em",
							}}
						/>
					</FadingCarousel>
				</ImagePart>
			</Section>
		</Container>
	);
}

const Container = styled.div`
	padding: 1em;
	padding-top: calc(var(--navbar-height) + 1em);
	max-width: var(--max-width);
	margin: auto;
	display: flex;
	flex-direction: column;
	gap: 1em;
`;

const HeaderSection = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1em;
	height: calc(100vh - var(--navbar-height));
`;

const Section = styled.section`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
	gap: 2em;
	height: 60vh;

	&.column {
		flex-direction: column;
		justify-content: center;
	}

	@media (max-width: 1000px) {
		flex-direction: column;
		justify-content: center;
	}
`;

const TextPart = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	gap: 1em;
	height: 100%;
	width: 50%;

	@media (max-width: 1000px) {
		width: 100%;
	}
`;

const ImagePart = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 50%;
	height: 100%;

	@media (max-width: 1000px) {
		width: 100%;
	}
`;

const MainTitle = styled.h1`
	font-size: 3em;
	text-align: center;
`;

const Spiderman = styled.span`
	color: #430000;
	position: relative;
	font-weight: bold;

	transition: color 0.2s ease-in-out;

	&::before {
		content: "";
		display: inline-block;
		position: absolute;
		top: -1.2em;
		left: 1.2em;
		height: 2em;
		width: 2em;
		background-image: url("/images/spiderman.png");
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
		margin-right: 0.5em;

		visibility: hidden;
		opacity: 0;

		transition: visibility 0.2s ease-in-out, opacity 0.2s ease-in-out;
	}

	:hover {
		color: #ca0203;

		&::before {
			visibility: visible;
			opacity: 1;
		}
	}

	@media (max-width: 550px) {
		&::before {
			display: none;
		}
	}
`;

const Title = styled.h1`
	font-size: 2.5rem;
	margin-bottom: 0.5em;
`;

/* const Subtitle = styled.h2`
	font-size: 1.6rem;
	margin-bottom: 0.5em;
`; */

const Text = styled.p`
	font-size: 1.3rem;
`;
