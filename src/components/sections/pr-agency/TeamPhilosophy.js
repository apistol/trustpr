const TeamPhilosophy = () => {
	const values = [
		"Calitate, nu cantitate",
		"Strategie înainte de execuție",
		"Înțelegerea profundă a clientului",
		"Reputație pe termen lung, nu zgomot de moment"
	];

	return (
		<section className="pr-team">
			<div className="container">
				<div className="pr-team__content">
					<h2 className="pr-team__title">Echipa & filozofie</h2>
					
					<div className="pr-team__grid">
						<div className="pr-team__column">
							<p className="pr-team__text">
								Echipa noastră este formată din jurnaliști, specialiști în PR, 
								comunicare, experți în corporate communications și consultanți 
								cu experiență în comunicare politică și poziționare publică.
							</p>
							<p className="pr-team__text">
								Combinăm rigoarea presei cu strategia și creativitatea PR-ului modern.
							</p>
						</div>
						
						<div className="pr-team__column">
							<p className="pr-team__belief">
								Credem în comunicare clară, autentică și strategică.
							</p>
							
							<div className="pr-team__values">
								<h3 className="pr-team__values-title">Valorile noastre</h3>
								<ul className="pr-team__values-list">
									{values.map((value, index) => (
										<li key={index} className="pr-team__value">
											<span className="pr-team__value-bullet">—</span>
											<span>{value}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TeamPhilosophy;
