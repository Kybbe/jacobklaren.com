"use client";

import styled from "styled-components";

export default function Footer() {
	return (
		<FooterContainer>
			<FooterSection>
				<FooterTitle>Get in touch</FooterTitle>

				<FooterText>
					You can contact me by sending an email to{" "}
					<FooterLink href="mailto:jacob.klaren@me.com">
						Jacob.klaren@me.com
					</FooterLink>{" "}
					or by filling out the{" "}
					<FooterLink href="/contact">form on the contact page</FooterLink>
				</FooterText>
			</FooterSection>

			<FooterSection>
				<FooterTitle>Follow me</FooterTitle>

				<FooterText>
					You can follow me on{" "}
					<FooterLink href="https://www.linkedin.com/in/jacob-klaren/">
						LinkedIn
					</FooterLink>{" "}
					and <FooterLink href="https://github.com/Kybbe">Github</FooterLink>
				</FooterText>
			</FooterSection>

			<FooterSection>
				<FooterTitle>My resume</FooterTitle>

				<FooterText>
					You can{" "}
					<FooterLink href="/Jacob_Klaren_CV.pdf" download>
						download my resume
					</FooterLink>{" "}
					or{" "}
					<FooterLink href="/Jacob_Klaren_CV.pdf" target="_blank">
						view it directly in browser
					</FooterLink>
				</FooterText>
			</FooterSection>

			<FooterSection>
				<FooterTitle>Tech used</FooterTitle>

				<Row>
					<FooterUl>
						<FooterLi>Next.js</FooterLi>
						<FooterLi>React</FooterLi>
						<FooterLi>Vercel</FooterLi>
					</FooterUl>
					<FooterUl>
						<FooterLi>Typescript</FooterLi>
						<FooterLi>Framer Motion</FooterLi>
						<FooterLi>Spline 3d</FooterLi>
					</FooterUl>
					<FooterUl>
						<FooterLi>Styled Components</FooterLi>
						<FooterLi>Nodemailer</FooterLi>
						<FooterLi>Redux</FooterLi>
					</FooterUl>
				</Row>
			</FooterSection>
		</FooterContainer>
	);
}

const FooterContainer = styled.footer`
	width: 100%;
	padding: 2em;
	background-color: rgb(var(--footer));
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2em;

	@media (min-width: 1050px) {
		flex-direction: row;
	}
`;

const FooterSection = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1em;

	@media (min-width: 1050px) {
		align-items: flex-start;
	}
`;

const FooterTitle = styled.h2`
	font-size: 1.5em;
	font-weight: 500;
	color: rgb(var(--text));
`;

const FooterText = styled.p`
	font-size: 1em;
	font-weight: 400;
	color: rgb(var(--text));
	text-align: center;

	@media (min-width: 1050px) {
		text-align: left;
	}
`;

const FooterLink = styled.a`
	font-size: 1em;
	font-weight: 400;
	color: rgb(var(--accent));
	text-decoration: none;
	transition: 0.2s ease-in-out;

	&:hover {
		text-decoration: underline;
	}
`;

const Row = styled.div`
	display: flex;
	flex-direction: row;
	gap: 1em;
`;

const FooterUl = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 0.5em;
	list-style: none;
	padding: 0;
	margin: 0;
`;

const FooterLi = styled.li`
	font-size: 0.85em;
	font-weight: 400;
	color: rgb(var(--text));
`;
