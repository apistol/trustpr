const ServicesCollaborators = () => {
	const services = [
		{
			category: "Social Media",
			items: ["Content foto/video", "Copywriting", "Community management", "Ads"]
		},
		{
			category: "Website & Design",
			items: ["Website", "Design grafic", "Logo", "Brandbook"]
		}
	];

	return (
		<section className="section-gap" style={{ background: "#1a1a1a", color: "#fff" }}>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading style-3 text-center mb-5">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s" style={{ color: "#717171" }}>
								<i className="tji-box"></i> Prin colaboratori
							</span>
							<h2 className="sec-title text-anim" style={{ color: "#fff" }}>
								Servicii colaboratori
							</h2>
							<p className="wow fadeInUp" data-wow-delay=".4s" style={{ 
								color: "rgba(255,255,255,0.7)", 
								marginTop: "16px",
								fontSize: "17px"
							}}>
								Servicii disponibile prin parteneri de încredere
							</p>
						</div>
					</div>
				</div>
				<div className="row g-4 justify-content-center">
					{services.map((service, idx) => (
						<div key={idx} className="col-12 col-md-5">
							<div className="wow fadeInUp" data-wow-delay={`0.${idx + 3}s`} style={{
								background: "rgba(255,255,255,0.05)",
								padding: "40px",
								height: "100%",
								border: "1px solid rgba(255,255,255,0.1)"
							}}>
								<h4 style={{ 
									fontSize: "22px", 
									fontWeight: "600", 
									marginBottom: "24px",
									color: "#fff"
								}}>
									{service.category}
								</h4>
								<ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
									{service.items.map((item, i) => (
										<li key={i} style={{
											padding: "10px 0",
											borderBottom: i < service.items.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none",
											fontSize: "15px",
											color: "rgba(255,255,255,0.8)",
											display: "flex",
											alignItems: "center",
											gap: "10px"
										}}>
											<span style={{ color: "rgba(255,255,255,0.4)" }}>—</span> {item}
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

export default ServicesCollaborators;
