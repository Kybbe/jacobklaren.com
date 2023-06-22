import styled from "styled-components";

export default function CTAButon() {
	return (
		<div>
			<Button type="button">Contact me</Button>
		</div>
	);
}

const Button = styled.button`
	background-color: transparent;
	border: 2px solid rgb(var(--accent));
	border-radius: var(--border-radius);
	box-shadow: 4px 4px 8px black;
	color: rgb(var(--accent));
	cursor: pointer;
	font-size: 1em;
	font-weight: 700;
	padding: 1em 2.2em;
	text-decoration: none;
	text-align: center;
	text-transform: uppercase;
	background-image: -webkit-linear-gradient(
		45deg,
		rgb(var(--accent)) 50%,
		transparent 50%
	);
	background-image: linear-gradient(
		45deg,
		rgb(var(--accent)) 50%,
		transparent 50%
	);
	background-position: 100%;
	background-size: 400%;
	transition: background 500ms ease-in-out;

	&:hover,
	&:focus {
		background-position: 0;
		color: #fff;
	}

	@media (min-width: 900px) {
		font-size: 1.25em;
	}
`;
