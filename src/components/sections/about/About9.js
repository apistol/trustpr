const About9 = () => {
	const boutiqueReasons = [
		"Fiecare client primește o echipă dedicată",
		"Personalizare completă a serviciilor",
		"Proces rapid, flexibil și eficient",
		"Doar soluții create special",
		"Acces direct la seniori, nu la juniori"
	];

	const values = [
		"Calitate, nu cantitate",
		"Strategie înainte de execuție",
		"Înțelegerea profundă a clientului",
		"Reputație pe termen lung, nu zgomot de moment"
	];

	return (
		<section className="h10-about section-gap">
			<div className="container">
				{/* Cine suntem */}
				<div className="row mb-5">
					<div className="col-12 col-lg-6">
						<div className="sec-heading style-3">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i> Cine suntem
							</span>
							<h2 className="sec-title title-highlight wow fadeInUp" data-wow-delay=".3s">
								Agenție boutique de PR și comunicare
							</h2>
						</div>
						<p className="desc wow fadeInUp" data-wow-delay=".4s" style={{ fontSize: "18px", lineHeight: "1.8", marginBottom: "20px" }}>
							Suntem o agenție boutique de PR și comunicare care lucrează exclusiv în formule personalizate, adaptate fiecărui brand, lider sau organizație.
						</p>
						<p className="desc wow fadeInUp" data-wow-delay=".5s" style={{ fontSize: "18px", lineHeight: "1.8" }}>
							Oferim strategie, conținut și execuție cu standarde ridicate și o atenție reală la detalii.
						</p>
					</div>
					<div className="col-12 col-lg-6">
						<div className="sec-heading style-3">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i> De ce boutique?
							</span>
						</div>
						<ul className="wow fadeInUp" data-wow-delay=".4s" style={{ listStyle: "none", padding: 0 }}>
							{boutiqueReasons.map((reason, idx) => (
								<li key={idx} style={{ padding: "12px 0", borderBottom: "1px solid #e5e5e5", fontSize: "17px", display: "flex", alignItems: "center", gap: "12px" }}>
									<span style={{ color: "#717171" }}>—</span> {reason}
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Echipa */}
				<div className="row mt-5 pt-5" style={{ borderTop: "1px solid #e5e5e5" }}>
					<div className="col-12 col-lg-8">
						<div className="sec-heading style-3">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i> Echipa
							</span>
						</div>
						<p className="desc wow fadeInUp" data-wow-delay=".4s" style={{ fontSize: "18px", lineHeight: "1.8", marginBottom: "20px" }}>
							Echipa noastră este formată din jurnaliști, specialiști în PR, comunicare, experți în corporate communications și consultanți cu experiență în comunicare politică și poziționare publică.
						</p>
						<p className="desc wow fadeInUp" data-wow-delay=".5s" style={{ fontSize: "18px", lineHeight: "1.8", marginBottom: "20px" }}>
							Combinăm rigoarea presei cu strategia și creativitatea PR-ului modern.
						</p>
						<p className="desc wow fadeInUp" data-wow-delay=".6s" style={{ fontSize: "18px", lineHeight: "1.8", fontStyle: "italic" }}>
							Credem în comunicare clară, autentică și strategică.
						</p>
					</div>
					<div className="col-12 col-lg-4">
						<div className="wow fadeInUp" data-wow-delay=".5s">
							<p style={{ fontSize: "14px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.1em", color: "#717171", marginBottom: "20px" }}>
								Punem accent pe:
							</p>
							<ul style={{ listStyle: "none", padding: 0 }}>
								{values.map((value, idx) => (
									<li key={idx} style={{ padding: "10px 0", fontSize: "16px", display: "flex", alignItems: "center", gap: "12px" }}>
										<span style={{ color: "#717171" }}>—</span> {value}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About9;
