import Link from "next/link";

const ContactCTA = () => {
	return (
		<section className="pr-contact">
			<div className="container">
				<div className="pr-contact__content">
					<h2 className="pr-contact__title">
						Hai să vorbim
					</h2>
					<p className="pr-contact__text">
						Suntem pregătiți să ascultăm povestea ta și să găsim 
						soluția potrivită pentru nevoile tale de comunicare.
					</p>
					<Link href="mailto:contact@trustpr.ro" className="pr-contact__cta">
						contact@trustpr.ro
					</Link>
				</div>
			</div>
		</section>
	);
};

export default ContactCTA;
