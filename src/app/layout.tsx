import Navbar from "@/components/Layout/Navbar";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Work_Sans } from "next/font/google";
// eslint-disable-next-line camelcase
import Footer from "@/components/Layout/Footer";
import { Providers } from "@/utils/ProviderFactory";

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
			<Analytics />

			<body className={WS.className}>
				<Providers>
					<Navbar />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
