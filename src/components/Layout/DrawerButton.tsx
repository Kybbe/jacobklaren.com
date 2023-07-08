import styles from "./DrawerButton.module.scss";

interface Props {
	open: boolean;
	toggleOpen: () => void;
}

export default function DrawerButton({ open, toggleOpen }: Props) {
	return (
		<button
			type="button"
			className={`${open ? styles.open : ""} ${styles.button}`}
			onClick={() => {
				toggleOpen();
			}}
		>
			<div className={`${open ? styles.active : ""} ${styles.menuIcon}`}>
				<div>
					<span />
					<span />
				</div>
			</div>
		</button>
	);
}
