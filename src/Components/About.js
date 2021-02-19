import React, { useEffect } from "react";

// IMPORTING SINGLE CONTAINER CHILDREN COMPONENT
import AUSingleDetailBox from "./AUSingleDetailBox";

// importing AOS for animations
import AOS from "aos";
import "aos/dist/aos.css";

// IMPORTING REACT-ICONS
import { GiCheckMark } from "react-icons/gi";

const About = () => {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div id="about" className="AboutPageContainer container">
			<div className="row">
				<div
					data-aos="fade-left"
					data-aos-duration="1200"
					data-aos-offset="350"
					className="col-lg-6 col-md-12"
				>
					<h1
						data-aos="fade-left"
						data-aos-duration="1200"
						data-aos-offset="350"
						className="AboutTitle"
					>
						We lead and support our customer’s cloud
					</h1>
					<p
						data-aos="fade-left"
						data-aos-duration="1200"
						data-aos-offset="350"
						className="ADetailPara"
					>
						It is a long established fact that a reader will be distracted by
						the readable content of a page when looking at its layout.
					</p>
					<div
						data-aos="fade-left"
						data-aos-duration="1200"
						data-aos-offset="350"
						className="row"
					>
						<div className="col-6">
							<ul>
								<li>
									<GiCheckMark className="AboutListIcon" /> Boost SEO ranking
								</li>
								<li>
									<GiCheckMark className="AboutListIcon" /> Social Sharing
								</li>
								<li>
									<GiCheckMark className="AboutListIcon" /> Marketing
								</li>
							</ul>
						</div>
						<div
							data-aos="fade-left"
							data-aos-duration="1200"
							data-aos-offset="350"
							className="col-6"
						>
							<ul>
								<li>
									<GiCheckMark className="AboutListIcon" /> Retention
								</li>
								<li>
									<GiCheckMark className="AboutListIcon" /> Visual Reviews
								</li>
								<li>
									<GiCheckMark className="AboutListIcon" /> Reviews Generation
								</li>
							</ul>
						</div>
					</div>
					<div
						data-aos="fade-left"
						data-aos-duration="1200"
						data-aos-offset="200"
						className="button6th_container"
					>
						<button className="btn6th">
							<span>Learn more!</span>
						</button>
					</div>
				</div>
				<div
					data-aos="fade-right"
					data-aos-duration="1200"
					data-aos-offset="350"
					className="AboutUS-RSideContainer col-lg-6 col-md-12"
				>
					<div className="row">
						{/* Single Box Component */}
						<AUSingleDetailBox
							Quantity="50k+"
							Detail="Engineers and Developers"
						/>
						<AUSingleDetailBox Quantity="35M+" Detail="Instances Deployed" />
						<AUSingleDetailBox Quantity="100k+" Detail="Customers" />
						<AUSingleDetailBox
							Quantity="15M+"
							Detail="Support answers per month"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
