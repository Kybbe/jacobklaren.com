"use client";

import { useAppSelector } from "@/hooks/redux/useAppSelector";
import { motion } from "framer-motion";
import { useRef } from "react";
import useMouse from "@react-hook/mouse-position";
import styled from "styled-components";

const MouseFollow = () => {
	const cursorVariant = useAppSelector(state => state.ui.cursorVariant);

	const cursorTextMap: { [key: string]: string } = {
		default: "",
		project: "→",
		contact: "👋🏻",
	};

	const ref = useRef(null);
	const mouse = useMouse(ref, {
		enterDelay: 100,
		leaveDelay: 100,
	}) as unknown as { x: number; y: number; clientX: number; clientY: number };

	let mouseXPosition = 0;
	let mouseYPosition = 0;

	if (mouse.x !== null) {
		mouseXPosition = mouse.clientX;
	}

	if (mouse.y !== null) {
		mouseYPosition = mouse.clientY;
	}

	const variants = {
		default: {
			opacity: 1,
			height: 10,
			width: 10,
			fontSize: "16px",
			backgroundColor: "#1e91d6",
			x: mouseXPosition,
			y: mouseYPosition,
			transition: {
				type: "spring",
				mass: 0.6,
			},
		},
		project: {
			opacity: 1,
			// backgroundColor: "rgba(255, 255, 255, 0.6)",
			backgroundColor: "#fff",
			color: "#000",
			height: 80,
			width: 80,
			fontSize: "18px",
			x: mouseXPosition - 32,
			y: mouseYPosition - 32,
		},
		contact: {
			opacity: 1,
			backgroundColor: "#FFBCBC",
			color: "#000",
			height: 64,
			width: 64,
			fontSize: "32px",
			x: mouseXPosition - 48,
			y: mouseYPosition - 48,
		},
	};

	const spring = {
		type: "spring",
		stiffness: 500,
		damping: 28,
	};

	return (
		<div>
			<Container ref={ref}>
				<Circle
					variants={variants}
					className="circle"
					animate={cursorVariant}
					transition={spring}
				>
					<span className="cursorText">{cursorTextMap[cursorVariant]}</span>
				</Circle>
			</Container>
		</div>
	);
};

export default MouseFollow;

const Circle = styled(motion.div)`
	position: fixed;
	z-index: 100;
	display: flex;
	flex-flow: row;
	align-content: center;
	justify-content: center;
	top: 0;
	left: 0;
	height: 10px;
	width: 10px;
	background-color: #1e91d6;
	border-radius: 200px;
	pointer-events: none;
	color: #fff;
	text-align: center;
	font-size: 16px;
`;

const Container = styled.div`
	display: flex;
	flex: 1;
	height: 100%;
	width: 100%;
`;
