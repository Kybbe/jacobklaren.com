"use client";

import { useState, useEffect, ReactNode } from "react";
import styles from "./FadingCarousel.module.scss";

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
		<div style={containerStyle} className={styles.container}>
			{children.map((child: ReactNode, index: number) => (
				<div
					key={Math.random()}
					style={childStyle}
					className={`${styles.child} ${
						index === activeIndex ? styles.active : ""
					} ${index === lastIndex ? styles.last : ""}`}
				>
					{child}
				</div>
			))}
		</div>
	);
}
