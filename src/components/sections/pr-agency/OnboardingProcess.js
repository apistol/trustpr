const OnboardingProcess = () => {
	const stages = [
		{
			number: "01",
			title: "Discuție inițială",
			description: "Înțelegem nevoile și obiectivele tale."
		},
		{
			number: "02",
			title: "Audit & diagnoză",
			description: "Analizăm situația actuală și oportunitățile."
		},
		{
			number: "03",
			title: "Propunere & strategie",
			description: "Prezentăm un plan concret și personalizat."
		},
		{
			number: "04",
			title: "Kick-off",
			description: "Pornim colaborarea cu o sesiune dedicată."
		},
		{
			number: "05",
			title: "Implementare",
			description: "Executăm conform planului."
		},
		{
			number: "06",
			title: "Feedback & optimizare",
			description: "Rafinăm continuu strategia."
		}
	];

	return (
		<section className="pr-onboarding">
			<div className="container">
				<div className="pr-onboarding__header">
					<h2 className="pr-onboarding__title">Procesul de onboarding</h2>
					<p className="pr-onboarding__subtitle">
						Cum începem o colaborare
					</p>
				</div>
				
				<div className="pr-onboarding__timeline">
					{stages.map((stage, index) => (
						<div key={index} className="pr-onboarding__stage">
							<div className="pr-onboarding__stage-number">{stage.number}</div>
							<div className="pr-onboarding__stage-content">
								<h3 className="pr-onboarding__stage-title">{stage.title}</h3>
								<p className="pr-onboarding__stage-desc">{stage.description}</p>
							</div>
							{index < stages.length - 1 && (
								<div className="pr-onboarding__connector"></div>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default OnboardingProcess;
