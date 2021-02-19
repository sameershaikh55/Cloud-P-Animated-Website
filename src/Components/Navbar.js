import React from "react";
// import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = ({ ClickEvent }) => {
	// FOR NAVBAR SCROLLING EFFECT START
	window.addEventListener("scroll", function () {
		var header = document.querySelector(".NavbarContainer");
		header.classList.toggle("sticky", window.scrollY > 1);
	});

	// FOR NAVBAR SCROLLING EFFECT END
	return (
		// <div className="NavbarContainerAnimation">
		<div className="container">
			<div className="row">
				<div className="col-10 mx-auto">
					<div className="NavbarContainer">
						<Link to="upperNavbar" smooth={true} duration={600}>
							<h1>Cloudy</h1>
						</Link>
						<div className="NavbarToggleBtn">
							<button
								onClick={ClickEvent}
								className="navbar-toggler collapsed"
								type="button"
							>
								<span className="menu-btn d-inline-block" id="menu-btn">
									<span className="line"></span>
									<span className="line"></span>
									<span className="line"></span>
								</span>
								<span className="ion-navicon"></span>
							</button>
						</div>
						<ul>
							<li>
								<Link
									activeClass="activeNav"
									to="home"
									smooth={true}
									duration={600}
									spy={true}
									offset={-500}
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									activeClass="activeNav"
									to="about"
									smooth={true}
									duration={600}
									spy={true}
									offset={-200}
								>
									About
								</Link>
							</li>
							<li>
								<Link
									activeClass="activeNav"
									to="service"
									smooth={true}
									duration={600}
									spy={true}
								>
									Service
								</Link>
							</li>
							<li>
								<Link
									activeClass="activeNav"
									to="hosting"
									smooth={true}
									duration={600}
									spy={true}
									offset={-120}
								>
									Hosting
								</Link>
							</li>
							<li>
								<Link
									activeClass="activeNav"
									to="contact"
									smooth={true}
									duration={600}
									spy={true}
									offset={-105}
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		// </div>
	);
};

export default Navbar;
