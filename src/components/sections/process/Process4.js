const Process4 = () => {
	const onboardingSteps = [
		"Brief inițial",
		"Setarea obiectivelor",
		"Calendar editorial",
		"Definirea mesajelor",
		"Implementare",
		"Raportare"
	];

	return (
		<section className="h10-process section-gap section-gap-x tj-sticky-panel-3-container">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading style-3 text-center mb-5">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i> Procesul de onboarding
							</span>
							<h2 className="sec-title text-anim">
								Cum începem o colaborare
							</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="wow fadeInUp" data-wow-delay=".4s" style={{ 
							display: "flex", 
							flexWrap: "wrap",
							justifyContent: "center",
							alignItems: "center",
							gap: "20px",
							padding: "40px 0"
						}}>
							{onboardingSteps.map((step, idx) => (
								<div key={idx} style={{ display: "flex", alignItems: "center", gap: "20px" }}>
									<div style={{
										padding: "20px 30px",
										border: "1px solid #e5e5e5",
										borderRadius: "4px",
										fontSize: "16px",
										fontWeight: "500",
										color: "#1a1a1a",
										background: "#fff",
										transition: "all 0.3s ease"
									}}>
										{step}
									</div>
									{idx < onboardingSteps.length - 1 && (
										<span style={{ color: "#717171", fontSize: "20px" }}>→</span>
									)}
								</div>
							))}
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

export default Process4;
