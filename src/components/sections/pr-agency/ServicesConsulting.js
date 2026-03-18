const ServicesConsulting = () => {
	const services = [
		{
			title: "Consultanță de comunicare",
			description: "Evaluare și recomandări strategice, audit de comunicare, training media"
		},
		{
			title: "Evenimente & lansări",
			description: "Conferințe de presă, workshop-uri, evenimente corporate"
		},
		{
			title: "Comunicare de criză",
			description: "Consultanță, scenarii și reacție rapidă"
		}
	];

	return (
		<section className="pr-services pr-services--consulting">
			<div className="container">
				<div className="pr-services__header">
					<span className="pr-services__label">Servicii</span>
					<h2 className="pr-services__title">Consultanță & Evenimente</h2>
				</div>
				
				<div className="pr-services__grid">
					{services.map((service, index) => (
						<div key={index} className="pr-services__card">
							<h3 className="pr-services__card-title">{service.title}</h3>
							<p className="pr-services__card-desc">{service.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ServicesConsulting;
