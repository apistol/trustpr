import Footer2 from "@/components/layout/footer/Footer2";
import Header from "@/components/layout/header/Header";
import HeroTrustPR from "@/components/sections/hero/HeroTrustPR";
import Services10 from "@/components/sections/services/Services10";
import About9 from "@/components/sections/about/About9";
import Process4 from "@/components/sections/process/Process4";
import ServicesPR from "@/components/sections/services/ServicesPR";
import ServicesConsulting from "@/components/sections/services/ServicesConsulting";
import ServicesCollaborators from "@/components/sections/services/ServicesCollaborators";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export default function Home() {
	return (
		<div>
			<BackToTop />
			<Header headerType={10} />
			<Header headerType={10} isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<div className="top-space-15"></div>
						<HeroTrustPR />
						<About9 />
						<Services10 />
						<Process4 />
						<ServicesPR />
						<ServicesConsulting />
						<ServicesCollaborators />
					</main>
					<Footer2 />
				</div>
			</div>

			<ClientWrapper />
		</div>
	);
}
