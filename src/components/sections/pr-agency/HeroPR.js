import Link from "next/link";

const HeroPR = () => {
	return (
		<section className="pr-hero">
			<div className="container">
				<div className="pr-hero__content">
					<h1 className="pr-hero__title">
						Agenție boutique de PR și comunicare
					</h1>
					<p className="pr-hero__subtitle">
						Suntem o agenție boutique de PR și comunicare care lucrează exclusiv 
						în formule personalizate, adaptate fiecărui brand, lider sau organizație.
					</p>
					<Link href="/contact" className="pr-hero__cta">
						Hai să vorbim
						<span className="pr-hero__cta-arrow">→</span>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default HeroPR;
