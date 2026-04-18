import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Link from "next/link";

const Services10 = () => {
	const steps = [
		{
			id: 1,
			title: "Diagnostic",
			desc: "Înțelegem businessul, obiectivele și publicurile. Analizăm situația actuală și identificăm oportunitățile de comunicare.",
		},
		{
			id: 2,
			title: "Strategie",
			desc: "Creăm un plan complet, adaptat și realist. Dezvoltăm mesaje cheie și definim canalele optime de comunicare.",
		},
		{
			id: 3,
			title: "Execuție & Măsurare",
			desc: "Implementăm, monitorizăm și ajustăm permanent. Raportăm rezultatele și optimizăm strategia în timp real.",
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
									<div key={idx} className="col-12 col-md-4">
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
