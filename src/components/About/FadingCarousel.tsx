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

	useEffect(() => {
		const autoRotate = () => {
			setActiveIndex((activeIndex + 1) % children.length);
		};

		const interval = setInterval(autoRotate, 5000);
		return () => clearInterval(interval);
	}, [activeIndex, children.length]);

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
