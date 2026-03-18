const WhyBoutique = () => {
	const benefits = [
		"Fiecare client primește o echipă dedicată",
		"Personalizare completă a serviciilor",
		"Proces rapid, flexibil și eficient",
		"Doar soluții create special",
		"Acces direct la seniori, nu la juniori"
	];

	return (
		<section className="pr-boutique">
			<div className="container">
				<div className="pr-boutique__content">
					<h2 className="pr-boutique__title">De ce boutique?</h2>
					<ul className="pr-boutique__list">
						{benefits.map((benefit, index) => (
							<li key={index} className="pr-boutique__item">
								<span className="pr-boutique__bullet">—</span>
								<span className="pr-boutique__text">{benefit}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default WhyBoutique;
