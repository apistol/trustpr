import Link from "next/link";

const TeamCard = ({ teamMember }) => {
	const {
		id,
		name,
		desig,
		position,
		image,
		img,
	} = teamMember || {};
	const displayImg = img || image || `https://placehold.co/400x500/0a1628/ffffff?text=${encodeURIComponent(name || 'Team')}`;
	const displayDesig = desig || position;
	return (
		<div className="team-item left-swipe">
			<div className="team-img">
				<div className="team-img-inner">
					<img src={displayImg} alt={name || ''} />
				</div>
				<div className="social-links">
					<ul>
						<li>
							<Link href="https://www.facebook.com/" target="_blank">
								<i className="fa-brands fa-facebook-f"></i>
							</Link>
						</li>
						<li>
							<Link href="https://www.instagram.com/" target="_blank">
								<i className="fa-brands fa-instagram"></i>
							</Link>
						</li>
						<li>
							<Link href="https://x.com/" target="_blank">
								<i className="fa-brands fa-x-twitter"></i>
							</Link>
						</li>
						<li>
							<Link href="https://www.linkedin.com/" target="_blank">
								<i className="fa-brands fa-linkedin-in"></i>
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="team-content">
				<h4 className="title">
					<Link href={`/team/${id}`}>{name}</Link>
				</h4>
				<span className="designation">{displayDesig}</span>
				<Link className="mail-at" href="mailto:info@bexon.com">
					<i className="tji-at"></i>
				</Link>
			</div>
		</div>
	);
};

export default TeamCard;
