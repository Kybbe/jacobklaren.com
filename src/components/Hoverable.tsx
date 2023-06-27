import { useAppDispatch } from "@/hooks/redux/useAppDispatch";
import { setCursorVariant } from "@/store/slices/uiSlice";
import { FC } from "react";

interface Props {
	hoverType: "default" | "project" | "contact";
	children: React.ReactNode;
}

const Hoverable: FC<Props> = ({ children, hoverType }) => {
	const dispatch = useAppDispatch();

	function handleMouseEnter() {
		dispatch(setCursorVariant(hoverType));
	}

	function handleMouseLeave() {
		dispatch(setCursorVariant("default"));
	}

	return (
		<div
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className="hoverable"
		>
			{children}
		</div>
	);
};

export default Hoverable;
