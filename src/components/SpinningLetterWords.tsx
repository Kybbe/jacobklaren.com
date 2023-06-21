/* eslint-disable react/no-array-index-key */
import { FC, useEffect } from "react";
import styled from "styled-components";

interface Props {
	word: string;
	fontSize?: string;
	fontWeight?: string;
	color?: string;
	underline?: "hover" | "underline" | "none";
}

interface LetterProps {
	fontSize?: string;
	fontWeight?: string;
	color?: string;
	underline?: "hover" | "underline" | "none";
}

const SpinningLetterWords: FC<Props> = ({
	word,
	fontSize,
	fontWeight,
	color,
	underline,
}) => {
	useEffect(() => {
		setTimeout(() => {
			const italicLetters = document.querySelectorAll(".italicLetters");

			italicLetters.forEach((letter: Element) => {
				letter.classList.add("italicOpacityAnimated");
			});
		}, 500);
	}, []);

	return (
		<MainContainer underline={underline || "none"} color={color}>
			<NormalLettersContainer className="normal">
				{word.split("").map((letter: string, index: number) => (
					<NormalLetter
						fontSize={fontSize}
						fontWeight={fontWeight}
						color={color}
						style={
							letter === " "
								? { width: "0.2em" }
								: { transitionDelay: `${index * 0.02}s` }
						}
						key={letter + index}
					>
						{letter}
					</NormalLetter>
				))}
			</NormalLettersContainer>
			<ItalicLettersContainer className="italic">
				{word.split("").map((letter: string, index: number) => (
					<ItalicLetter
						fontSize={fontSize}
						fontWeight={fontWeight}
						color={color}
						style={
							letter === " "
								? { width: "0.2em" }
								: { transitionDelay: `${index * 0.02}s` }
						}
						className="italicLetters"
						key={letter + index}
					>
						{letter}
					</ItalicLetter>
				))}
			</ItalicLettersContainer>
		</MainContainer>
	);
};

export default SpinningLetterWords;

const MainContainer = styled.div<LetterProps>`
	position: relative;
	white-space: nowrap;

	&:before {
		content: "";
		position: absolute;
		left: 0;
		bottom: 0;
		width: ${props => (props.underline === "underline" ? "100%" : "0%")};
		border-bottom: ${props =>
			props.underline !== "none"
				? `1px solid ${props.color || "rgb(var(--text))"}`
				: "none"};

		transition: width 0.35s ease-in-out, left 0.35s ease-in-out;
	}

	&:hover {
		&:before {
			width: ${props => (props.underline !== "none" ? "100%" : "0%")};
			left: 6px;
		}
	}

	&:hover > .italic {
		left: 6px;

		> p {
			opacity: 1;

			transform: translate3d(0%, 0px, 0px) scale(1, 1);
		}
	}

	&:hover > .normal > p {
		opacity: 0;

		transform: translate3d(50%, 0px, 0px) scale(0, 1);
	}
`;

const NormalLettersContainer = styled.div`
	position: relative;
`;

const ItalicLettersContainer = styled.div<LetterProps>`
	position: absolute;
	top: 0;
	left: 0px;
	transition: left 0.35s ease-in-out;
	width: 100%;
	height: 100%;
	border-bottom: ${props =>
		props.underline === "underline"
			? `1px solid ${props.color || "rgb(var(--text))"}`
			: "none"};

	&:hover {
		border-bottom: ${props =>
			props.underline === "hover"
				? `1px solid ${props.color || "rgb(var(--text))"}`
				: "none"};
	}
`;

const NormalLetter = styled.p<LetterProps>`
	display: inline-block;
	font-size: ${props => (props.fontSize ? props.fontSize : "1em")};
	font-weight: ${props => (props.fontWeight ? props.fontWeight : "400")};
	color: ${props => (props.color ? props.color : "rgb(var(--text))")};
	margin: 0;
	padding: 0;
	opacity: 1;

	transform: translate3d(0%, 0px 0px) scale(1, 1);
	transition: transform 0.35s ease-in-out, opacity 0.35s ease-in-out;
`;

const ItalicLetter = styled.p<LetterProps>`
	display: inline-block;
	font-size: ${props => (props.fontSize ? props.fontSize : "1em")};
	font-weight: ${props => (props.fontWeight ? props.fontWeight : "400")};
	color: ${props => (props.color ? props.color : "rgb(var(--text))")};
	margin: 0;
	padding: 0;
	font-style: italic;
	opacity: 0;

	transform: translate3d(0%, 0px, 0px) scale(0, 1);
	transition: transform 0.35s ease-in-out;

	&.italicOpacityAnimated {
		transition: transform 0.35s ease-in-out, opacity 0.35s ease-in-out;
	}
`;
