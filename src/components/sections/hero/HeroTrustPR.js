"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Link from "next/link";

const HeroTrustPR = () => {
	return (
		<section className="tj-slider-section">
			<div className="tj-slider-item" style={{ height: "100vh" }}>
				<div
					className="slider-bg-image"
					style={{
						backgroundImage: "url('/images/hero/hero-bg.png')",
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				></div>
				<div className="container">
					<div className="slider-wrapper">
						<div className="slider-content">
							<h1 className="slider-title" style={{ color: "#fff" }}>
								Agenție boutique de <span>PR și comunicare</span>
							</h1>
							<div className="slider-desc" style={{ color: "rgba(255,255,255,0.9)" }}>
								Suntem o agenție boutique de PR și comunicare care lucrează exclusiv 
								în formule personalizate, adaptate fiecărui brand, lider sau organizație.
							</div>
							<div className="slider-btn">
								<ButtonPrimary text={"Hai să vorbim"} url={"/contact"} />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="circle-text-wrap wow fadeInUp" data-wow-delay="1s">
				<span
					className="circle-text"
					style={{ backgroundImage: "url('/images/hero/circle-text.webp')" }}
				></span>
				<Link className="circle-icon" href="#about">
					<i className="tji-arrow-down-big"></i>
				</Link>
			</div>
		</section>
	);
};

export default HeroTrustPR;
