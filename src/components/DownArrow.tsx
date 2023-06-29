import styled from "styled-components";

export default function DownArrow() {
	return (
		<StyledDownArrow
			onClick={() => {
				window.scrollTo({
					top: window.innerHeight,
					behavior: "smooth",
				});
			}}
		>
			<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					id="Vector"
					d="M12 7V17M12 17L16 13M12 17L8 13"
					stroke="rgb(var(--text))"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</StyledDownArrow>
	);
}

const StyledDownArrow = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	position: absolute;
	bottom: -10px;
	left: 50%;
	transform: translateX(-50%);
	z-index: 50;

	height: 8em;
	margin-top: 1em;
	cursor: pointer;
	animation: bobUpDown 5s ease-in-out infinite;

	> svg {
		width: 6em;
		height: 6em;
	}

	@keyframes bobUpDown {
		0% {
			transform: translate(-50%, 0px);
		}
		50% {
			transform: translate(-50%, 20px);
		}
		100% {
			transform: translate(-50%, 0px);
		}
	}
`;
