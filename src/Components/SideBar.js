import React from "react";

import { ImCross } from "react-icons/im";

import { Link } from "react-scroll";

const SideBar = ({ isOpen, ClickEvent }) => {
	return (
		<div
			onClick={ClickEvent}
			style={{
				opacity: `${isOpen ? "1" : "0"}`,
				top: `${isOpen ? "0%" : "-100%"}`,
			}}
			className="SideBarContainer"
		>
			<ImCross onClick={ClickEvent} className="CrossBTn" />
			<ul>
				<li>
					<Link
						activeClass="activeNav"
						to="upperNavbar"
						smooth={true}
						duration={600}
						spy={true}
						offset={-500}
						onClick={ClickEvent}
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
						onClick={ClickEvent}
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
						onClick={ClickEvent}
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
						onClick={ClickEvent}
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
						onClick={ClickEvent}
					>
						Contact
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default SideBar;
