import styled from "styled-components";

interface Props {
	open: boolean;
	toggleOpen: () => void;
}

export default function DrawerButton({ open, toggleOpen }: Props) {
	return (
		<Button
			type="button"
			className={`hamburgerButton ${open ? "open" : ""}`}
			onClick={() => {
				toggleOpen();
			}}
		>
			<div className={`menu-icon ${open ? "active" : ""}`}>
				<div>
					<span />
					<span />
				</div>
			</div>
		</Button>
	);
}

const Button = styled.button`
	position: fixed;
	top: 0.2em;
	right: 0.2em;
	z-index: 200;

	background: transparent;
	border: none;
	color: var(--text);
	font-size: 1.5em;
	cursor: pointer;

	@media (min-width: 900px) {
		display: none;
	}

	display: flex;
	justify-content: center;
	align-items: center;

	.menu-icon {
		position: relative;
		width: 40px;
		height: 40px;
		cursor: pointer;

		div {
			margin: auto;
			position: absolute;
			top: 0;
			right: 0;
			left: 0;
			bottom: 0;
			width: 32px;
			height: 22px;
		}

		span {
			position: absolute;
			display: block;
			width: 100%;
			height: 2px;
			background-color: rgb(var(--text));
			border-radius: 1px;
			transition: all 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965);

			&:first-of-type {
				top: 0;
			}
			&:last-of-type {
				bottom: 0;
			}
		}
		&.active {
			span {
				&:first-of-type {
					transform: rotate(45deg);
					top: 10px;
				}
				&:last-of-type {
					transform: rotate(-45deg);
					bottom: 10px;
				}
			}
		}

		&.active:hover span:first-of-type,
		&.active:hover span:last-of-type,
		&:hover .menu-icon__cheeckbox:checked + div span:first-of-type,
		&:hover .menu-icon__cheeckbox:checked + div span:last-of-type {
			width: 32px;
		}

		&:hover {
			span:first-of-type {
				width: 36px;
			}

			span:last-of-type {
				width: 22px;
			}
		}
	}
`;
