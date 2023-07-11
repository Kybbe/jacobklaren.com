"use client";

import { useState, useEffect, ReactNode } from "react";
import styles from "./FadingCarousel.module.scss";

export default function FadingCarousel({
	children,
	containerStyle,
	childStyle,
	rotateInterval = 5000,
}: {
	children: ReactNode[];
	containerStyle?: React.CSSProperties;
	childStyle?: React.CSSProperties;
	rotateInterval?: number;
}) {
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		const autoRotate = () => {
			setActiveIndex((activeIndex + 1) % children.length);
		};

		const interval = setInterval(autoRotate, rotateInterval);
		return () => clearInterval(interval);
	}, [activeIndex, children.length, rotateInterval]);

	return (
		<div style={containerStyle} className={styles.container}>
			{children.map((child: ReactNode, index: number) => (
				<div
					// eslint-disable-next-line react/no-array-index-key
					key={index}
					style={childStyle}
					className={`${styles.child} ${
						index === activeIndex ? styles.active : ""
					}`}
				>
					{child}
				</div>
			))}
		</div>
	);
}
