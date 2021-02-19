import React, { useEffect } from "react";

// importing AOS for animations
import AOS from "aos";
import "aos/dist/aos.css";

const SingleService = ({ Heading, Logo }) => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div
			data-aos="fade-up"
			data-aos-duration="1000"
			data-aos-offset="350"
			className="col-lg-4 col-md-6 col-sm-12"
		>
			<div className="VSSingleServiceContainer">
				<div
					data-aos="fade-up"
					data-aos-duration="1000"
					data-aos-offset="320"
					className="SSTitle"
				>
					<Logo className="ServicesIcons" />
					<h3>
						<a href="upperNavbar">{Heading}</a>
					</h3>
				</div>
				<p data-aos="fade-up" data-aos-duration="1000" data-aos-offset="320">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
				<a
					data-aos="fade-up"
					data-aos-duration="1000"
					data-aos-offset="330"
					href="upperNavbar"
					className="SSReadMoreBtn"
				>
					Read More
				</a>
			</div>
		</div>
	);
};

export default SingleService;
