import Navbar from "@/components/Layout/Navbar";
import "./globals.css";
// eslint-disable-next-line camelcase
import { Work_Sans } from "next/font/google";
import StyledComponentsRegistry from "@/utils/StyledComponentsRegistry";
import { Providers } from "@/utils/ProviderFactory";
import Footer from "@/components/Layout/Footer";

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
					<Providers>
						<Navbar />
						{children}
						<Footer />
					</Providers>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
