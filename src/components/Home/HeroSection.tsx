import Image from "next/image";
import styled from "styled-components";
import CTAButton from "./CTAButton";
import DownArrow from "../DownArrow";
import DownloadIcon from "../DownloadIcon";

export default function HeroSection() {
	return (
		<Row>
			<Col
				style={{
					padding: "0 1em",
				}}
			>
				<Title>
					Hi, my name is <AccentText>Jacob Klarén</AccentText>
				</Title>
				<Subtitle>I'm a fullstack developer</Subtitle>
				<Subtitle>I love web design, learning new things,</Subtitle>
				<Subtitle>
					<AccentText>And people of course!</AccentText>
				</Subtitle>

				<br />

				<ButtonContainer>
					<CTAButton />

					<ButtonDivider>Or</ButtonDivider>

					<DonwloadResumeButton href="/files/JacobKlarenCV.pdf" download>
						<DownloadIcon color="rgb(var(--accent))" size="2em" />
						Download my resume
					</DonwloadResumeButton>
				</ButtonContainer>
			</Col>

			<Col className="imageContainerCol">
				<StyledImage
					src="/images/jacob/hero.webp"
					width="500"
					height="500"
					alt="Picture of me"
				/>
			</Col>

			<DownArrow />
		</Row>
	);
}

const Row = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2rem;
	overflow: hidden;
	position: relative;

	height: 100vh;
	height: calc(100vh - env(safe-area-inset-bottom));

	@media (min-width: 900px) {
		flex-direction: row;
		justify-content: space-evenly;
	}
`;

const Col = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 0.2em;

	@media (min-width: 900px) {
		gap: 1em;

		&.imageContainerCol {
			width: 40%;
		}
	}
`;

const Title = styled.h1`
	font-size: 2.5em;
	color: rgb(var(--text));
	font-weight: 700;
	margin-bottom: 0.2em;

	transition: all 0.2s ease-in-out;

	@media (min-width: 900px) {
		font-size: 3em;
		margin-bottom: 0.5em;

		&:hover,
		&:focus {
			font-size: 3.1em !important;
		}
	}

	&:hover,
	&:focus {
		font-size: 2.6em;
	}
`;

const AccentText = styled.span`
	color: rgb(var(--accent));
`;

const Subtitle = styled.h2`
	font-size: 1.5em;
	color: rgb(var(--text));
	font-weight: 500;

	transition: all 0.2s ease-in-out;

	@media (min-width: 900px) {
		font-size: 2em;

		&:hover,
		&:focus {
			font-size: 2.1em !important;
		}
	}

	&:hover,
	&:focus {
		font-size: 1.6em;
	}
`;

const StyledImage = styled(Image)`
	filter: drop-shadow(0px 0px 10px rgba(var(--text), 0.25));
	transform: none;
	transition: all 0.2s ease-in-out;
	padding: 0em;
	height: 50vh;
	object-fit: cover;
	object-position: top;
	overflow: hidden;

	&:hover,
	&:focus {
		filter: none;

		transform: scale(1.02) rotate(2deg) translateX(10px) translateY(-10px);
	}

	@media (min-width: 900px) {
		padding: 1em;
		height: auto;
		width: 100%;
	}
`;

const ButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: fit-content;
	gap: 1em;

	@media (min-width: 550px) {
		align-items: center;
		flex-direction: row;
		gap: 1em;
	}
`;

const ButtonDivider = styled.h3`
	font-size: 1.2em;
	color: rgb(var(--text));
	font-weight: 500;
	text-align: center;

	@media (min-width: 900px) {
		font-size: 1.5em;
	}
`;

const DonwloadResumeButton = styled.a`
	display: flex;
	align-items: center;
	font-size: 1em;
	font-weight: 500;
	color: rgb(var(--accent));
	text-decoration: none;
	width: fit-content;
	white-space: nowrap;
	transition: all 0.2s ease-in-out;

	svg {
		transform: translateY(0px);
		transition: all 0.2s ease-in-out;
	}

	&:hover,
	&:focus {
		svg {
			transform: translateY(5px);
		}
	}

	@media (min-width: 900px) {
		font-size: 1.2em;
	}
`;
