import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

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
		<Section
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
			<Left>
				<Title>{title}</Title>
				<ImageContainer>
					<StyledImage src={image} alt={title} width={1000} height={1000} />
				</ImageContainer>

				<ButtonContainer>
					<ViewButton href={`/project/${title}`} target="_blank">
						Read more
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
				<GitLiveLink href={liveURL} target="_blank">
					<svg
						fill="currentcolor"
						viewBox="0 0 16 16"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M16 7.38A7.82 7.82 0 0 0 8 .5a7.82 7.82 0 0 0-8 6.88v1.24a7.82 7.82 0 0 0 8 6.88 7.82 7.82 0 0 0 8-6.88V7.38zm-1.25 0h-3a11.34 11.34 0 0 0-.43-2.54 7.6 7.6 0 0 0 1.75-1 6 6 0 0 1 1.65 3.54zm-9.18 0a9.69 9.69 0 0 1 .37-2.14A8.43 8.43 0 0 0 8 5.5a8.49 8.49 0 0 0 2.09-.26 10.2 10.2 0 0 1 .37 2.14zm4.92 1.24a9.59 9.59 0 0 1-.37 2.14 8.53 8.53 0 0 0-4.18 0 9.69 9.69 0 0 1-.37-2.14zm.4-5A11.82 11.82 0 0 0 10 2a6.89 6.89 0 0 1 2 1 6.57 6.57 0 0 1-1.14.66zm-2.6-1.86a10 10 0 0 1 1.38 2.3A7.63 7.63 0 0 1 8 4.25a7.56 7.56 0 0 1-1.67-.19 9.82 9.82 0 0 1 1.38-2.3h.58zm-3.15 1.9A6.57 6.57 0 0 1 4 3a6.89 6.89 0 0 1 2-1 10.38 10.38 0 0 0-.86 1.66zM3 3.83a7.6 7.6 0 0 0 1.75 1 11 11 0 0 0-.43 2.54h-3A6 6 0 0 1 3 3.83zM1.28 8.62h3a11 11 0 0 0 .43 2.54 7.6 7.6 0 0 0-1.75 1 6 6 0 0 1-1.68-3.54zm3.86 3.72A10.38 10.38 0 0 0 6 14a6.89 6.89 0 0 1-2-1 6.57 6.57 0 0 1 1.14-.66zm2.57 1.9a9.82 9.82 0 0 1-1.38-2.3 7.43 7.43 0 0 1 3.34 0 9.76 9.76 0 0 1-1.38 2.3h-.58zm3.15-1.9a6.57 6.57 0 0 1 1.19.66 7.24 7.24 0 0 1-2 1 11.48 11.48 0 0 0 .81-1.66zm2.14-.17a7.6 7.6 0 0 0-1.75-1 10.8 10.8 0 0 0 .43-2.54h3A6 6 0 0 1 13 12.17z" />
					</svg>
					<p>Live site</p>
				</GitLiveLink>
				<GitLiveLink href={githubURL} target="_blank">
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
				</GitLiveLink>
			</Right>
		</Section>
	);
}

const Section = styled(motion.section)`
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
	padding: 1.8em 0.2em 0 0;

	@media (min-width: 600px) {
		padding: 1.8em 1em;
	}

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

	&:hover,
	&:focus {
		color: rgb(var(--text));
	}

	padding: 0.2em 0.8em;

	transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

	@media (min-width: 600px) {
		width: 5em;
		height: 5em;
		border-radius: 50%;
		border: 2px solid rgb(var(--text));
		color: rgb(var(--text));
		background: rgba(var(--background), 0.5);
		text-decoration: none;
		text-align: center;

		display: flex;
		justify-content: center;
		align-items: center;

		padding: 0;

		position: absolute;
		bottom: 1em;
		left: calc(100% - 2.5em);

		&:hover,
		&:focus {
			background-color: rgb(var(--text));
			color: rgb(var(--background));
			animation-play-state: paused;
			text-decoration: underline;
		}

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
			color: white;
			font-weight: 700;
		}

		&:hover,
		&:focus {
			background-color: rgb(var(--accent));
			color: white;
			font-weight: 800;
			transform: scale(1.2);
		}
	}
`;

const GitLiveLink = styled(Link)`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 0.5em;

	svg {
		width: 1.2em;
		height: 1.2em;

		transition: all 0.2s ease-in-out;
		transform: rotateY(0deg);
	}

	&:hover > svg,
	&:focus > svg {
		fill: rgb(var(--accent));
		animation: spinY 5s linear infinite;
	}

	@keyframes spinY {
		0% {
			transform: rotateY(0deg);
		}
		100% {
			transform: rotateY(360deg);
		}
	}
`;
