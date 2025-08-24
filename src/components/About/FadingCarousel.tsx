"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
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
	const [paused, setPaused] = useState(false);
	const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	const resetAutoRotateAndPause = () => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
		}
		if (pauseTimeoutRef.current) {
			clearTimeout(pauseTimeoutRef.current);
		}
		setPaused(true);

		const SEVEN_SECONDS = 7000;
		pauseTimeoutRef.current = setTimeout(() => {
			setPaused(false);
		}, SEVEN_SECONDS);
	};

	const goToPrev = () => {
		setActiveIndex((prev) => (prev - 1 + children.length) % children.length);
		resetAutoRotateAndPause();
	};
	const goToNext = () => {
		setActiveIndex((prev) => (prev + 1) % children.length);
		resetAutoRotateAndPause();
	};

	useEffect(() => {
		if (paused) {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
				intervalRef.current = null;
			}
			return;
		}

		const autoRotate = () => {
			setActiveIndex((prev) => (prev + 1) % children.length);
		};

		intervalRef.current = setInterval(autoRotate, rotateInterval);
		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
				intervalRef.current = null;
			}
		};
	}, [children.length, rotateInterval, paused]);

	return (
		<div style={containerStyle} className={styles.container}>
			<div className={styles.navButtonsContainer}>
				<button
					type="button"
					className={styles.navButton}
					onClick={goToPrev}
					aria-label="Previous image"
				>
					&#60;
				</button>
				<button
					type="button"
					className={styles.navButton}
					onClick={goToNext}
					aria-label="Next image"
				>
					&#62;
				</button>
			</div>
			{children.map((child: ReactNode, index: number) => {
				// Try to use child's key if available, otherwise fallback to a generated key
				const key =
					child &&
					typeof child === "object" &&
					"key" in child &&
					child.key != null
						? child.key
						: `carousel-child-${index}`;
				return (
					<div
						key={key}
						style={childStyle}
						className={`${styles.child} ${
							index === activeIndex ? styles.active : ""
						}`}
					>
						{child}
					</div>
				);
			})}
		</div>
	);
}
