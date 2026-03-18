const ServicesCollaborators = () => {
	const services = [
		{
			title: "Social media management",
			description: "Strategie, calendar editorial, postări, community management (prin parteneri)"
		},
		{
			title: "Website & content",
			description: "Copywriting, design colaborativ, structură de site (prin parteneri)"
		},
		{
			title: "Video & podcast",
			description: "Scripturi, coordonare producție, distribuție media (prin parteneri)"
		},
		{
			title: "Publicitate & campanii plătite",
			description: "Google Ads, Meta Ads, campanii native (prin parteneri)"
		}
	];

	return (
		<section className="pr-services pr-services--collab">
			<div className="container">
				<div className="pr-services__header">
					<span className="pr-services__label">Servicii</span>
					<h2 className="pr-services__title">Prin colaboratori</h2>
					<p className="pr-services__note">
						Servicii disponibile prin parteneri de încredere
					</p>
				</div>
				
				<div className="pr-services__grid">
					{services.map((service, index) => (
						<div key={index} className="pr-services__card pr-services__card--partner">
							<h3 className="pr-services__card-title">{service.title}</h3>
							<p className="pr-services__card-desc">{service.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ServicesCollaborators;
