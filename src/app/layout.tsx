import Navbar from "@/components/Navbar";
import "./globals.css";
// eslint-disable-next-line camelcase
import { Work_Sans } from "next/font/google";
import StyledComponentsRegistry from "@/utils/StyledComponentsRegistry";

const WS = Work_Sans({ subsets: ["latin"] });

export const metadata = {
	title: "Jacob Klarén",
	description:
		"Jacob Klarén is a Fullstack developer based in Gothenburg, Sweden.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={WS.className}>
				<StyledComponentsRegistry>
					<Navbar />
					{children}
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
