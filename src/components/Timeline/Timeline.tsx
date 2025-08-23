"use client";

import React, { useState } from "react";
import { showcases, type TimelineNode } from "@/components/showcasesData";
import styles from "./Timeline.module.scss";

const getYearGuides = (start: number, end: number) => {
	if (end <= start) return [];
	if (!start || !end) return [];
	if (start === end)
		return [{ year: new Date(start).getFullYear(), percent: 100 }];
	if (typeof start !== "number" || typeof end !== "number") return [];

	const guides = [];
	const startYear = new Date(start).getFullYear();
	const endYear = new Date(end).getFullYear();

	if (startYear + 1 === endYear) return [];

	for (let y = startYear + 1; y <= endYear; y++) {
		const yearTime = new Date(y, 0, 1).getTime();
		const percent = ((yearTime - start) / (end - start)) * 100;
		guides.push({ year: y, percent });
	}
	return guides;
};

type TimelineNodeWithId = TimelineNode & { id: string };

export type TimelineProps = {
	nodes?: TimelineNodeWithId[];
	onNodeClick?: (id: string) => void;
	onNodeHover?: (id: string) => void;
};

export const TimelineWithScrollHandling: React.FC<TimelineProps> = ({
	nodes,
	onNodeClick,
	onNodeHover,
}) => {
	console.log("Rendering TimelineWithScrollHandling with nodes:", nodes);

	const handleNodeClick = (id: string) => {
		const el = document.getElementById(`showcase-${id}`);
		if (el) {
			el.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	return (
		<Timeline
			nodes={nodes ?? showcases.map((s) => ({ ...s.timeline, id: s.id }))}
			onNodeHover={onNodeHover || undefined}
			onNodeClick={onNodeClick || handleNodeClick}
		/>
	);
};

export const Timeline: React.FC<TimelineProps> = ({
	nodes,
	onNodeClick,
	onNodeHover,
}) => {
	const [hoveredId, setHoveredId] = useState<string>("");

	console.log("Rendering Timeline with nodes:", nodes);

	if (!nodes || nodes.length === 0) {
		return (
			<div className={styles.emptyTimeline}>No timeline data available</div>
		);
	}

	// Sort nodes by start time
	let sortedNodes = [...nodes].sort((a, b) => a.time - b.time);
	// Move 'Present' node(s) to end
	const presentNodes = sortedNodes.filter(
		(n) =>
			n.span?.label && n.span.label.trim().toLowerCase().endsWith("present"),
	);
	sortedNodes = sortedNodes.filter(
		(n) =>
			!(n.span?.label && n.span.label.trim().toLowerCase().endsWith("present")),
	);
	sortedNodes = [...sortedNodes, ...presentNodes];

	// Calculate positions
	let positions: number[] = [];
	let timelineStart = sortedNodes[0]?.time;
	let timelineEnd = sortedNodes?.some((n) =>
		n.span?.label?.toLowerCase().includes("present"),
	)
		? Date.now()
		: sortedNodes?.[sortedNodes?.length - 1].time;

	// Start a bit before first node, end at now
	const offset =
		sortedNodes?.length > 1
			? (sortedNodes?.[1]?.time - sortedNodes[0]?.time) * 0.2
			: 1000 * 60 * 60 * 24 * 30;
	timelineStart -= offset;
	timelineEnd = Date.now();
	positions = sortedNodes?.map((n) => {
		// Position 'Present' nodes at their start time
		const pos =
			((n.time - timelineStart) / (timelineEnd - timelineStart)) * 100;
		// Clamp position between 0 and 100
		return Math.max(0, Math.min(100, pos));
	});

	// Year guides
	const yearGuides = getYearGuides(timelineStart, timelineEnd);

	return (
		<div className={styles.timelineContainer}>
			<div className={styles.timelineBar}>
				{yearGuides.map((guide, idx) => (
					<div
						key={guide.year}
						style={{
							position: "absolute",
							left: `${guide.percent}%`,
							top: 0,
							height: "100%",
							width: "2px",
							background: "#bbb",
							zIndex: 0,
						}}
					>
						<span
							style={{
								position: "absolute",
								top: "-22px",
								left: "-18px",
								fontSize: "0.8rem",
								color: "#888",
								fontWeight: 500,
								background: "#fff",
								padding: "0 4px",
								borderRadius: "4px",
							}}
						>
							{guide.year}
						</span>
					</div>
				))}

				{sortedNodes.map((node, i) => {
					const hasSpan = !!node.span;
					const spanStart = positions[i];
					let spanEnd: number | null = null;
					if (hasSpan) {
						if (node.span.end === "Present") {
							spanEnd =
								((Date.now() - timelineStart) / (timelineEnd - timelineStart)) *
								100;
						} else {
							spanEnd =
								(((node.span.end as number) - timelineStart) /
									(timelineEnd - timelineStart)) *
								100;
						}
					}
					// Middle position for node
					let middle = positions[i];
					if (hasSpan && spanEnd !== null) {
						middle = spanStart + (spanEnd - spanStart) / 2;
					}
					// Calculate zIndex: shorter spans get higher zIndex
					let zIndex = 1;
					if (hasSpan && spanEnd !== null) {
						const spanLength = spanEnd - spanStart;
						// Count how many spans are longer than this one
						const longerCount = sortedNodes.filter((n, j) => {
							if (!n.span) return false;
							let otherEnd;
							if (n.span.end === "Present") {
								otherEnd =
									((Date.now() - timelineStart) /
										(timelineEnd - timelineStart)) *
									100;
							} else {
								otherEnd =
									(((n.span.end as number) - timelineStart) /
										(timelineEnd - timelineStart)) *
									100;
							}
							return otherEnd - positions[j] > spanLength;
						}).length;
						zIndex = 2 + longerCount;
					}
					// If span ends in Present, don't show end marker
					const isPresent = node.span?.label
						?.trim()
						.toLowerCase()
						.endsWith("present");
					return (
						<React.Fragment key={node.id}>
							{hasSpan && (
								<div
									className={`${styles.timelineSpan} ${
										styles[`timelineSpan--${node.id}`]
									}`}
									style={{
										left: `${spanStart}%`,
										width: `${(spanEnd ?? 0) - spanStart}%`,
										cursor: "pointer",
										zIndex,
									}}
								>
									<div className={styles.timelineSpanBar} />
									<div className={styles.timelineSpanStart} />
									{!isPresent && <div className={styles.timelineSpanEnd} />}
								</div>
							)}

							<div
								role="button"
								tabIndex={0}
								className={`${styles.timelineNode}`}
								style={{ left: `${hasSpan ? middle : positions[i]}%` }}
								onClick={() => onNodeClick?.(node.id)}
								onKeyDown={(e) => {
									if (e.key === "Enter") {
										onNodeClick?.(node.id);
									}
								}}
								onMouseEnter={() => {
									setHoveredId(node.id);
									onNodeHover?.(node.id);
								}}
								onMouseLeave={() => {
									setHoveredId("");
									onNodeHover?.("");
								}}
							>
								<div
									className={`${styles.nodeCircle} ${
										styles[`nodeCircle--${node.id}`]
									}`}
								/>
								{hoveredId === node.id && (
									<>
										<span
											className={`${styles.nodeLabel} ${
												styles[`nodeLabel--${node.id}`]
											}`}
											style={{
												position: "absolute",
												top: "-28px",
												left: "50%",
												transform: "translateX(0) rotate(-45deg)",
												transformOrigin: "left bottom",
												color: "#2196f3",
												fontWeight: 600,
												fontSize: "1.1rem",
												borderRadius: "6px",
												zIndex: 20,
												whiteSpace: "nowrap",
											}}
										>
											{node.company || node.label}
										</span>

										<div
											className={`${styles.nodeTimeLabel} ${
												styles[`nodeTimeLabel--${node.id}`]
											}`}
											style={{
												position: "absolute",
												top: "50px",
												left: "50%",
												transform: "translateX(-50%)",
												color: "#333",
												fontSize: "0.85rem",
												fontWeight: 500,
												borderRadius: "6px",
												zIndex: 10,
												whiteSpace: "nowrap",
											}}
										>
											{node.label}
										</div>
									</>
								)}
							</div>
						</React.Fragment>
					);
				})}
			</div>
		</div>
	);
};
