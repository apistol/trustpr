import Link from "next/link";

const PortfolioCard2 = ({ portfolio }) => {
	const {
		title = "Event Management Platform",
		img2,
		img,
		shortDesc,
		id,
		dataFilter,
		category = "Connect",
	} = portfolio ? portfolio : {};
	const displayImg = img2 || img || "https://placehold.co/800x600/0a1628/ffffff?text=Portfolio";
	return (
		<div className="project-item">
			<div
				className="project-img"
				style={{ backgroundImage: `url(${displayImg})` }}
			></div>
			<div className="project-content">
				<span className="categories">
					<Link href={`/portfolios/${id}`}>{category}</Link>
				</span>
				<div className="project-text">
					<h3 className="title">
						<Link href={`/portfolios/${id}`}>{title}</Link>
					</h3>
					<Link className="project-btn" href={`/portfolios/${id}`}>
						<i className="tji-arrow-right-big"></i>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PortfolioCard2;
