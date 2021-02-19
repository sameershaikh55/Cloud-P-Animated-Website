import React, { useEffect } from "react";

// IMPORTING GIF
import ImageGif from "../Images/Location.gif";

import { GiCheckMark } from "react-icons/gi";

import CloudShape1 from "../Images/BgCLoud3.png";

// importing AOS for animations
import AOS from "aos";
import "aos/dist/aos.css";

const GServerLocations = () => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div className="GServerLocationContainer container">
			<div
				data-aos="fade-left"
				data-aos-duration="1000"
				data-aos-offset="350"
				className="CloudShapeContainer"
			>
				<img src={CloudShape1} alt="" />
			</div>
			<div
				data-aos="fade-left"
				data-aos-duration="1500"
				data-aos-offset="350"
				className="CloudShape2Container"
			>
				<img src={CloudShape1} alt="" />
			</div>
			<div className="row align-items-center">
				<div
					data-aos="fade-right"
					data-aos-duration="1500"
					data-aos-offset="350"
					className="GSLocationLImageContainer col-lg-6 col-md-12"
				>
					<img src={ImageGif} alt="" srcset="" height="100px" width="100px" />
				</div>
				<div
					data-aos="fade-left"
					data-aos-duration="1500"
					data-aos-offset="350"
					className="col-lg-6 col-md-12"
				>
					<h2>Global server location</h2>
					<p>
						Supercharge your WordPress hosting with detailed website analytics,
						marketing tools. Our experts are just part of the reason Bluehost is
						the ideal home for your WordPress website. We're here to help you
						succeed!
					</p>
					<ul>
						<li>
							<GiCheckMark className="AboutListIcon" /> Hosting for all types of
							websites
						</li>
						<li>
							<GiCheckMark className="AboutListIcon" /> Our experts are just
							part of the reason
						</li>
						<li>
							<GiCheckMark className="AboutListIcon" /> Detailed website
							analytics
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default GServerLocations;
