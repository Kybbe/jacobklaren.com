import { useState, useEffect, ReactNode } from "react";
import styled from "styled-components";

export default function FadingCarousel({
	children,
	containerStyle,
	childStyle,
}: {
	children: ReactNode[];
	containerStyle?: React.CSSProperties;
	childStyle?: React.CSSProperties;
}) {
	const [activeIndex, setActiveIndex] = useState(0);
	const [lastIndex, setLastIndex] = useState(0);

	useEffect(() => {
		const autoRotate = () => {
			setActiveIndex((activeIndex + 1) % children.length);
			setLastIndex(activeIndex);
		};

		const interval = setInterval(autoRotate, 5000);
		return () => clearInterval(interval);
	}, [activeIndex, children.length]);

	return (
		<Container style={containerStyle}>
			{children.map((child: ReactNode, index: number) => (
				<Child
					key={Math.random()}
					active={index === activeIndex}
					last={index === lastIndex}
					style={childStyle}
				>
					{child}
				</Child>
			))}
		</Container>
	);
}

const Container = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
`;

const Child = styled.div<{ active: boolean; last: boolean }>`
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	opacity: ${props => (props.active ? 1 : 0)};
	transition: opacity 1s ease-in-out;
	width: 100%;
	height: 100%;
	z-index: ${props => (props.active ? 1 : 0)};

	transition: opacity 1s ease-in-out;
`;
