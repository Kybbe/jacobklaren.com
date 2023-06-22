import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";

interface Props {
	title: string;
	description: string;
	image: string;
	content: string;
	technologies: string[];
	timespan: string;
	liveURL: string;
	githubURL: string;
	projectRole: string;
}

export default function Showcase({
	title,
	description,
	image,
	content,
	technologies,
	timespan,
	liveURL,
	githubURL,
	projectRole,
}: Props) {
	return (
		<Section>
			<Left>
				<Title>{title}</Title>
				<ImageContainer>
					<StyledImage src={image} alt={title} width={1000} height={1000} />
				</ImageContainer>

				<ButtonContainer>
					<ViewButton href="https://www.scouterna.se/" target="_blank">
						View
					</ViewButton>
				</ButtonContainer>

				<div className="content">
					<p>{description}</p>

					<UL className="technologies">
						{technologies.map(technology => (
							<li key={technology}>{technology}</li>
						))}
					</UL>
					{/* <p>{content}</p> */}
				</div>
			</Left>

			<Right>
				<p>{timespan}</p>
				<p>{projectRole}</p>
				<Link href={liveURL}>
					<p>Live</p>
				</Link>
				<Link href={githubURL}>
					<p>Github</p>
				</Link>
			</Right>
		</Section>
	);
}

const Section = styled.section`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: unset;
	gap: 1em;

	padding: 6em 0;

	.content {
		padding: 0.2em 1em;
		display: flex;
		flex-direction: column;
		gap: 1.5em;
	}

	.content > p {
		font-size: 1.2em;
		line-height: 1.25em;
		font-weight: 400;
	}
`;

const Title = styled.h2`
	font-size: clamp(2em, 3vw, 4em);
	font-weight: 700;
	margin-bottom: -0.5em;
	text-transform: uppercase;
	z-index: 2;
	padding: 0 0.1em;

	@media (min-width: 900px) {
		padding: 0 1em;
	}
`;

const ImageContainer = styled.div`
	border-radius: 0 var(--border-radius) var(--border-radius) 0;

	overflow: hidden;

	position: relative;

	aspect-ratio: 16 / 10;

	//create a linear gradient on top of the image to make it darker
	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		border-radius: 0 var(--border-radius) var(--border-radius) 0;

		background: linear-gradient(
			0deg,
			rgba(0, 0, 0, 0) 0%,
			rgba(var(--background), 0.2) 100%
		);
	}
`;

const StyledImage = styled(Image)`
	border-radius: 0 var(--border-radius) var(--border-radius) 0;
	object-fit: cover;

	width: 100%;
	height: 100%;
`;

const Left = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	position: relative;

	width: 80%;

	@media (min-width: 900px) {
		width: 70%;
	}
`;

const Right = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	text-align: right;

	width: 20%;
	padding: 1.8em 1em;

	@media (min-width: 900px) {
		width: 30%;
	}

	p {
		font-size: clamp(1em, 2vw, 4em);
		font-weight: 700;
	}
`;

const ButtonContainer = styled.div`
	position: relative;
	width: 100%;
`;

const ViewButton = styled.a`
	display: inline-block;
	background-color: transparent;
	color: rgb(var(--accent));
	text-decoration: underline;
	font-size: 1.5em;
	font-weight: 700;
	text-transform: uppercase;

	padding: 0.2em 0.8em;

	transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

	&:hover {
		background-color: rgb(var(--text));
		color: rgb(var(--background));
		animation-play-state: paused;
		text-decoration: underline;
	}

	@media (min-width: 600px) {
		width: 5em;
		height: 5em;
		border-radius: 50%;
		border: 2px solid rgb(var(--text));
		color: rgb(var(--text));
		background: rgba(var(--background), 0.5);
		text-decoration: none;
		text-align: center;
		line-height: 5em;

		padding: 0;

		position: absolute;
		bottom: 1em;
		left: calc(100% - 2.5em);

		animation: spin 10s linear infinite;

		@keyframes spin {
			0% {
				transform: rotate(0deg);
			}
			100% {
				transform: rotate(360deg);
			}
		}
	}
`;

const UL = styled.ul`
	list-style: none;
	display: flex;
	flex-wrap: wrap;
	gap: 0.5em;

	li {
		color: rgb(var(--background));
		background-color: rgb(var(--text));
		padding: 0.5em 1em;
		border-radius: 0.5em;
		font-size: 0.8em;
		font-weight: 600;
		text-transform: uppercase;

		white-space: nowrap;

		transition: all 0.2s ease-in-out;

		//the first 3 element should have accent color as background
		&:nth-child(-n + 3) {
			background-color: rgb(var(--accent));
			color: rgb(var(--text));
			font-weight: 700;
		}

		&:hover {
			background-color: rgb(var(--accent));
			color: rgb(var(--text));
			font-weight: 800;
			transform: scale(1.2);
		}
	}
`;
