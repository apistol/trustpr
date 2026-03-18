const ServicesPR = () => {
	const services = [
		{
			title: "PR Earned",
			description: "Relații cu presa, comunicate de presă, articole, interviuri, apariții TV"
		},
		{
			title: "Media Buying",
			description: "Plasamente plătite în presa scrisă, online sau TV, negociate strategic"
		},
		{
			title: "Studii de caz & whitepaper-uri",
			description: "Conținut de autoritate pentru poziționare B2B"
		},
		{
			title: "CEO & Founder PR",
			description: "Poziționare publică a liderilor: thought leadership, interviuri, articole de opinie"
		}
	];

	return (
		<section className="pr-services pr-services--pr">
			<div className="container">
				<div className="pr-services__header">
					<span className="pr-services__label">Servicii</span>
					<h2 className="pr-services__title">Comunicare & PR</h2>
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

export default ServicesPR;
