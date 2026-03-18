const Approach = () => {
	const steps = [
		{
			number: "01",
			title: "Diagnostic",
			description: "Înțelegem businessul, obiectivele și publicurile."
		},
		{
			number: "02",
			title: "Strategie",
			description: "Creăm un plan complet, adaptat și realist."
		},
		{
			number: "03",
			title: "Execuție & măsurare",
			description: "Implementăm, monitorizăm și ajustăm permanent."
		}
	];

	return (
		<section className="pr-approach">
			<div className="container">
				<div className="pr-approach__header">
					<h2 className="pr-approach__title">Abordarea noastră</h2>
					<p className="pr-approach__subtitle">Trei pași simpli:</p>
				</div>
				
				<div className="pr-approach__steps">
					{steps.map((step, index) => (
						<div key={index} className="pr-approach__step">
							<span className="pr-approach__number">{step.number}</span>
							<h3 className="pr-approach__step-title">{step.title}</h3>
							<p className="pr-approach__step-desc">{step.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Approach;
