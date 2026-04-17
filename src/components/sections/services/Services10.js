import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Link from "next/link";

const Services10 = () => {
	const steps = [
		{
			id: 1,
			title: "Diagnostic",
			desc: "Analizăm în profunzime situația actuală a brandului, identificăm punctele forte și zonele de îmbunătățire, evaluăm percepția publică și definim obiectivele de comunicare.",
		},
		{
			id: 2,
			title: "Strategie",
			desc: "Dezvoltăm un plan de comunicare personalizat, cu mesaje cheie clare, canale de distribuție optimizate și un calendar editorial adaptat nevoilor și resurselor disponibile.",
		},
		{
			id: 3,
			title: "Execuție",
			desc: "Implementăm strategia cu atenție la detalii, gestionăm relațiile cu media, creăm conținut de calitate și coordonăm toate activitățile de comunicare în mod integrat.",
		},
		{
			id: 4,
			title: "Măsurare",
			desc: "Monitorizăm rezultatele în timp real, analizăm impactul acțiunilor de comunicare, raportăm progresul și ajustăm strategia pentru a maximiza eficiența.",
		},
	];

	return (
		<section className="h5-service-section h10-service section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading-wrap style-8">
							<div className="heading-wrap-content">
								<div className="sec-heading style-3">
									<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
										<i className="tji-box"></i> Cum lucrăm
									</span>
									<h2 className="sec-title text-anim">
										Abordarea noastră
									</h2>
								</div>
								<div className="btn-area wow fadeInUp" data-wow-delay=".8s">
									<ButtonPrimary text={"Află mai multe"} url={"/services"} />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div
							className="service-wrapper h10-service-wrapper wow fadeInUp"
							data-wow-delay=".4s"
						>
							<div className="row g-4">
								{steps.map((step, idx) => (
									<div key={idx} className="col-12 col-md-6 col-lg-3">
										<div className="service-item style-4">
											<span className="steps">0{step.id}.</span>
											<div className="service-content">
												<h4 className="title">{step.title}</h4>
												<p className="desc">{step.desc}</p>
												<Link href="/services" className="service-btn">
													Află mai multe <i className="tji-arrow-right"></i>
												</Link>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services10;
