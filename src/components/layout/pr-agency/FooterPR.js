import Link from "next/link";

const FooterPR = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="pr-footer">
			<div className="container">
				<div className="pr-footer__inner">
					<div className="pr-footer__brand">
						<Link href="/" className="pr-footer__logo">
							TrustPR
						</Link>
						<p className="pr-footer__tagline">
							Agenție boutique de PR și comunicare
						</p>
					</div>

					<div className="pr-footer__contact">
						<a href="mailto:contact@trustpr.ro" className="pr-footer__email">
							contact@trustpr.ro
						</a>
					</div>

					<div className="pr-footer__bottom">
						<p className="pr-footer__copyright">
							© {currentYear} TrustPR. Toate drepturile rezervate.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default FooterPR;
