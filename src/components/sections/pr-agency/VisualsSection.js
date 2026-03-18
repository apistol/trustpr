const VisualsSection = () => {
	const practices = [
		"Imaginile și grafica reprezintă o parte esențială a brandului",
		"Un brand vizual consistent crește recunoașterea cu până la 80%",
		"Mesajele vizuale sunt procesate de 60.000 ori mai rapid decât textul",
		"Un design profesionist construiește încredere instantaneu",
		"Conținutul cu imagini relevante crește engagement-ul semnificativ"
	];

	return (
		<section className="pr-visuals">
			<div className="container">
				<div className="pr-visuals__content">
					<h2 className="pr-visuals__title">
						Why visuals matter
					</h2>
					<p className="pr-visuals__intro">
						În comunicare, modul în care arăți contează la fel de mult ca 
						ceea ce spui. Iată de ce investim în identitate vizuală:
					</p>
					
					<ul className="pr-visuals__list">
						{practices.map((practice, index) => (
							<li key={index} className="pr-visuals__item">
								<span className="pr-visuals__icon">◆</span>
								<span className="pr-visuals__text">{practice}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default VisualsSection;
