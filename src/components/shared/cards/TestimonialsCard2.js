import Image from "next/image";

const TestimonialsCard2 = ({ testimonial }) => {
	const { authorName, authorDesig, desc2, desc, img, name, position, logoImg, logoImgLight } =
		testimonial ? testimonial : {};
	const displayName = authorName || name;
	const displayDesig = authorDesig || position;
	const displayDesc = desc2 || desc;
	const displayImg = img || "https://placehold.co/89x89/0a1628/ffffff?text=Client";
	return (
		<div className="testimonial-item">
			<span className="quote-icon">
				<i className="tji-quote"></i>
			</span>
			<div className="desc">
				<p>{displayDesc}</p>
			</div>
			<div className="testimonial-author">
				<div className="author-inner">
					<div className="author-img">
						<Image
							src={displayImg}
							alt="Images"
							width={89}
							height={89}
							style={{ height: "auto" }}
						/>
					</div>
					<div className="author-header">
						<h4 className="title">{displayName}</h4>
						<span className="designation">{displayDesig}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TestimonialsCard2;
