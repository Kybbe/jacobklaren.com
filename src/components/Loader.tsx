import styled, { keyframes } from "styled-components";

export default function Loader({ size = 30 }) {
	return (
		<Container size={size}>
			<Circle1 size={size} />
			<Circle2 size={size} />
			<Circle3 size={size} />
			<Circle4 size={size} />
			<Circle5 size={size} />
		</Container>
	);
}

const Container = styled.span<{ size: number }>`
	display: inherit;
	position: relative;
	width: ${props => `${props.size}px`};
	height: ${props => `${props.size}px`};
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
      transform: rotate(180deg);
  }
  100% {
      transform: rotate(360deg);
  }
`;

const Circle1 = styled.span<{ size: number }>`
	position: absolute;
	height: ${props => `${props.size}px`};
	width: ${props => `${props.size}px`};
	border-top: 1px solid rgb(54, 215, 183);
	border-bottom: none;
	border-left: 1px solid rgb(54, 215, 183);
	border-right: none;
	border-radius: 100%;
	transition: all 2s ease 0s;
	top: 0%;
	left: 0%;
	animation: ${spin} 1s linear 0s infinite normal none running;
`;

const Circle2 = styled.span<{ size: number }>`
	position: absolute;
	height: ${props => `${props.size * 0.95}px`};
	width: ${props => `${props.size * 0.95}px`};
	border-top: 1px solid rgb(54, 215, 183);
	border-bottom: none;
	border-left: 1px solid rgb(54, 215, 183);
	border-right: none;
	border-radius: 100%;
	transition: all 2s ease 0s;
	top: 1.75%;
	left: 0.875%;
	animation: ${spin} 1s linear 0.2s infinite normal none running;
`;

const Circle3 = styled.span<{ size: number }>`
	position: absolute;
	height: ${props => `${props.size * 0.9}px`};
	width: ${props => `${props.size * 0.9}px`};
	border-top: 1px solid rgb(54, 215, 183);
	border-bottom: none;
	border-left: 1px solid rgb(54, 215, 183);
	border-right: none;
	border-radius: 100%;
	transition: all 2s ease 0s;
	top: 3.5%;
	left: 1.75%;
	animation: ${spin} 1s linear 0.4s infinite normal none running;
`;

const Circle4 = styled.span<{ size: number }>`
	position: absolute;
	height: ${props => `${props.size * 0.85}px`};
	width: ${props => `${props.size * 0.85}px`};
	border-top: 1px solid rgb(54, 215, 183);
	border-bottom: none;
	border-left: 1px solid rgb(54, 215, 183);
	border-right: none;
	border-radius: 100%;
	transition: all 2s ease 0s;
	top: 5.25%;
	left: 2.625%;
	animation: ${spin} 1s linear 0.6s infinite normal none running;
`;

const Circle5 = styled.span<{ size: number }>`
	position: absolute;
	height: ${props => `${props.size * 0.8}px`};
	width: ${props => `${props.size * 0.8}px`};
	border-top: 1px solid rgb(54, 215, 183);
	border-bottom: none;
	border-left: 1px solid rgb(54, 215, 183);
	border-right: none;
	border-radius: 100%;
	transition: all 2s ease 0s;
	top: 7%;
	left: 3.5%;
	animation: ${spin} 1s linear 0.8s infinite normal none running;
`;
