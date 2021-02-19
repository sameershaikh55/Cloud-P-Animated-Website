import React from "react";

// IMPORTING REACT-ICONS
import { IoIosArrowUp } from "react-icons/io";

// IMPORTING REACT SCROLL
import { Link } from "react-scroll";

const ScrolltoTop = () => {
	window.addEventListener("scroll", function () {
		var header = document.querySelector(".back-to-top");
		header.classList.toggle("ShowHideBtn", window.scrollY > 800);
	});
	return (
		<div className="back-to-top">
			<Link to="upperNavbar" smooth={true} duration={600} className="top">
				<IoIosArrowUp style={{ marginTop: "-5px" }} />
			</Link>
		</div>
	);
};

export default ScrolltoTop;
