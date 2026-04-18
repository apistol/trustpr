const ServicesConsulting = () => {
	const services = [
		{
			category: "Consultanță",
			items: ["Strategie", "Branding personal", "Criză & risk management", "Mesaje leadership"]
		},
		{
			category: "Evenimente proprii",
			items: ["Logistică", "Comunicare pre & post event", "Management media during event", "Management furnizori"]
		},
		{
			category: "Networking",
			items: ["Recomandări corporate events", "Recomandări grupuri business", "Intermedieri întâlniri / mese rotunde"]
		}
	];

	return (
		<section className="section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading style-3 text-center mb-5">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i> Servicii in house
							</span>
							<h2 className="sec-title text-anim">
								Consultanță & Evenimente
							</h2>
						</div>
					</div>
				</div>
				<div className="row g-4">
					{services.map((service, idx) => (
						<div key={idx} className="col-12 col-md-4">
							<div className="wow fadeInUp" data-wow-delay={`0.${idx + 3}s`} style={{
								background: "#fff",
								padding: "40px",
								height: "100%",
								border: "1px solid #e5e5e5"
							}}>
								<h4 style={{ 
									fontSize: "22px", 
									fontWeight: "600", 
									marginBottom: "24px",
									color: "#1a1a1a"
								}}>
									{service.category}
								</h4>
								<ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
									{service.items.map((item, i) => (
										<li key={i} style={{
											padding: "10px 0",
											borderBottom: i < service.items.length - 1 ? "1px solid #f0f0f0" : "none",
											fontSize: "15px",
											color: "#4a4a4a",
											display: "flex",
											alignItems: "center",
											gap: "10px"
										}}>
											<span style={{ color: "#717171" }}>—</span> {item}
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ServicesConsulting;
