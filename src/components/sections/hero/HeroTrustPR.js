"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const HeroTrustPR = () => {
	return (
		<section className="tj-banner-section-2 h10-hero section-gap-x zoom-on-scroll-wrapper">
			<div className="container">
				<div className="row flex-column-reverse flex-lg-row">
					<div className="col-lg-4 col-xl-3">
						<div className="h10-hero-award-wrapper">
							<div
								className="h6-hero-history wow fadeInUp"
								data-wow-delay=".3s"
							>
								<div className="h6-hero-history-title"></div>
								<p className="h6-hero-history-desc">
									Suntem o agenție boutique de PR și comunicare care lucrează exclusiv 
									în formule personalizate, adaptate fiecărui brand, lider sau organizație.
								</p>
							</div>
							<div
								className="circle-text-wrap wow bounceInLeft"
								data-wow-delay=".5s"
							>
								<span
									className="circle-text"
									style={{
										backgroundImage:
											"url('/images/icons/award-rounded-text.svg')",
									}}
								></span>
								<div className="circle-icon">
									<i className="tji-w-dot"></i>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-8 col-xl-9">
						<div className="banner-content-2">
							<h1 className="banner-title text-anim">
								Trust PR{" "}
								<i
									className="tji-curve-arrow wow fadeInRight"
									data-wow-delay=".7s"
								></i>
							</h1>
							<div
								className="banner-desc-area wow fadeInUp"
								data-wow-delay=".7s"
							>
								<ButtonPrimary text={"Hai să vorbim"} url={"/contact"} />
								<div className="banner-desc">
									Agenție boutique de comunicare
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-shape-1">
				<img src="/images/shape/pattern-2.svg" alt="" />
			</div>
			<div className="bg-shape-2">
				<img src="/images/shape/pattern-3.svg" alt="" />
			</div>
		</section>
	);
};

export default HeroTrustPR;
