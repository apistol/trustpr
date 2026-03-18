"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const HeaderPR = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navItems = [
		{ label: "Acasă", href: "#" },
		{ label: "Despre", href: "#about" },
		{ label: "Servicii", href: "#services" },
		{ label: "Contact", href: "#contact" }
	];

	return (
		<header className={`pr-header ${isScrolled ? "pr-header--scrolled" : ""}`}>
			<div className="container">
				<div className="pr-header__inner">
					<Link href="/" className="pr-header__logo">
						TrustPR
					</Link>

					<nav className="pr-header__nav">
						{navItems.map((item, index) => (
							<Link
								key={index}
								href={item.href}
								className="pr-header__link"
							>
								{item.label}
							</Link>
						))}
					</nav>

					<button
						className={`pr-header__burger ${isMobileMenuOpen ? "pr-header__burger--active" : ""}`}
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						aria-label="Menu"
					>
						<span></span>
						<span></span>
					</button>
				</div>
			</div>

			<div className={`pr-header__mobile ${isMobileMenuOpen ? "pr-header__mobile--open" : ""}`}>
				<nav className="pr-header__mobile-nav">
					{navItems.map((item, index) => (
						<Link
							key={index}
							href={item.href}
							className="pr-header__mobile-link"
							onClick={() => setIsMobileMenuOpen(false)}
						>
							{item.label}
						</Link>
					))}
				</nav>
			</div>
		</header>
	);
};

export default HeaderPR;
