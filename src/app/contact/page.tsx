"use client";

import ContactForm from "@/components/Contact/ContactForm";
import styled from "styled-components";

export default function Contact() {
	return (
		<Main>
			<TextPart>
				<Title>
					Tell me <AccentText>your dream project</AccentText>, and I'll make
					sure it comes to life!
				</Title>

				<Subtitle>
					I'm currently looking for new opportunities, so if you have a project
					that you think I could help you with,{" "}
					<AccentText>don't hesitate to contact me!</AccentText>
				</Subtitle>
			</TextPart>

			<ContactForm />
		</Main>
	);
}

const Main = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	gap: 1em;
	padding: 1em;
	padding-top: var(--navbar-height);

	max-width: var(--max-width);
	margin: 0 auto;

	height: 100dvh;
`;

const TextPart = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1em;
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
