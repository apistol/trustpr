"use client";

import Image from "next/image";
import Link from "next/link";
const Logo = ({ headerType, isStickyHeader }) => {
	return (
		<div className="site_logo">
			<Link className="logo" href="/">
				<Image
					src="/images/logos/logotrustpr.svg"
					alt="TrustPR"
					width={180}
					height={50}
					style={{ height: "auto" }}
				/>
			</Link>
		</div>
	);
};

export default Logo;
