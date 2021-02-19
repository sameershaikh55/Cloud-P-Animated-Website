import React, { useEffect } from "react";

import { MdSecurity, MdPhonelinkSetup } from "react-icons/md";
import { GiAutoRepair, GiTrafficLightsOrange } from "react-icons/gi";
import { BiBadgeCheck, BiHide } from "react-icons/bi";

import CloudShape1 from "../Images/BgCLoud3.png";

// IMPORTING INDIVISUAL SERVICES FROM SINGLE SERVICES
import SingleService from "./SingleService";

// importing AOS for animations
import AOS from "aos";
import "aos/dist/aos.css";

const Service = () => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div className="VServicesContainer">
			<div
				data-aos="fade-left"
				data-aos-duration="1000"
				data-aos-offset="300"
				className="CloudShapeContainer"
			>
				<img src={CloudShape1} alt="" />
			</div>
			<div
				data-aos="fade-left"
				data-aos-duration="1000"
				data-aos-offset="300"
				className="CloudShape2Container"
			>
				<img src={CloudShape1} alt="" />
			</div>
			<div className="container">
				<div className="VServicesTitle">
					<div
						data-aos="fade-up"
						data-aos-duration="1000"
						data-aos-offset="350"
						className="afterHeadingAnimationContainer"
					>
						<h2>Valuable Services</h2>
					</div>
					{/* <div className="bar"></div> */}
					<p data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</div>
				<div className="row">
					<SingleService Heading="Free Services" Logo={MdSecurity} />
					<SingleService Heading="Premium Services" Logo={BiBadgeCheck} />
					<SingleService Heading="Total Security" Logo={GiAutoRepair} />
					<SingleService Heading="Instant Set-Up" Logo={MdPhonelinkSetup} />
					<SingleService
						Heading="No Traffic Logos"
						Logo={GiTrafficLightsOrange}
					/>
					<SingleService Heading="No Hidden Price" Logo={BiHide} />
				</div>
			</div>
		</div>
	);
};

export default Service;
