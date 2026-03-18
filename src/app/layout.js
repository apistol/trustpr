import { Inter, Playfair_Display } from "next/font/google";
import "react-range-slider-input/dist/style.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "./assets/css/animate.min.css";
import "./assets/css/bexon-icons.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/font-awesome-pro.min.css";
import "./assets/css/glightbox.min.css";
import "./assets/css/meanmenu.css";
import "./assets/css/nice-select2.css";
import "./assets/css/odometer-theme-default.css";
import "./globals.scss";

const bodyFont = Inter({
	variable: "--tj-ff-body",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	style: ["normal"],
	display: "swap",
});
const headingFont = Playfair_Display({
	variable: "--tj-ff-heading",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	style: ["normal", "italic"],
	display: "swap",
});

export const metadata = {
	title: "Agenție Boutique de PR și Comunicare",
	description: "Suntem o agenție boutique de PR și comunicare care lucrează exclusiv în formule personalizate, adaptate fiecărui brand, lider sau organizație.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="ro" data-scroll-behavior="smooth" dir="ltr">
			<body className={`${bodyFont.variable} ${headingFont.variable}`}>
				{children}
			</body>
		</html>
	);
}
