import Image from "next/image";
import { styled } from "styled-components";

interface Props {
	title: string;
	description: string;
	image: string;
	content: string;
}

export default function Showcase({
	title,
	description,
	image,
	content,
}: Props) {
	return (
		<Section>
			<Title>{title}</Title>
			<ImageContainer>
				<StyledImage src={image} alt={title} width={1000} height={1000} />
			</ImageContainer>
			<div className="content">
				<p>{description}</p>
				<p>{content}</p>
			</div>
		</Section>
	);
}

const Section = styled.section`
	height: 80vh;
	height: calc(80vh - env(safe-area-inset-bottom));

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: unset;
	gap: 1em;

	@media (min-width: 900px) {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
`;

const Title = styled.h2`
	font-size: 2.5em;
	font-weight: 700;
	margin-bottom: -1em;
	text-transform: uppercase;
	z-index: 2;
	padding: 0 1em;
`;

const ImageContainer = styled.div`
	border-radius: 0 var(--border-radius) var(--border-radius) 0;

	width: 80%;
	height: 50%;
	overflow: hidden;

	@media (min-width: 900px) {
		width: 70%;
	}

	position: relative;

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
			rgba(0, 0, 0, 0.3) 100%
		);
	}
`;

const StyledImage = styled(Image)`
	object-fit: cover;

	width: 100%;
	height: 100%;
`;
