import React, { useEffect } from "react";

// IMPORTING IMAGES
import KDImg1 from "../Images/KDBoxImg1.png";
import KDImg2 from "../Images/KDBoxImg2.png";
import KDImg3 from "../Images/KDBoxImg3.png";
import KDImg4 from "../Images/KDBoxImg4.png";
import KDImg5 from "../Images/KDBoxImg5.png";
import KDImg6 from "../Images/KDBoxImg6.png";

// IMPORTING SINGLE CARD COMPONENT
import KeyDSingleCard from "./KeyDSingleCard";

// importing AOS for animations
import AOS from "aos";
import "aos/dist/aos.css";

const KeyDifferentiate = () => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div className="KeyDContainer">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="text-center iq-title-box iq-title-default iq-title-box-2">
							<div className="iq-title-icon"></div>
							<h2
								data-aos="fade-up"
								data-aos-duration="1000"
								data-aos-offset="200"
								className="iq-title"
							>
								Our key differentiators
							</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<KeyDSingleCard
						dataAos="fade-left"
						dataAosDuration="1000"
						dataAosOffset="350"
						Image={KDImg1}
						Heading="Geographic Footprint"
					/>
					<KeyDSingleCard
						dataAos="fade"
						dataAosDuration="1000"
						dataAosOffset="350"
						Image={KDImg2}
						Heading="One Click Apps"
					/>
					<KeyDSingleCard
						dataAos="fade-right"
						dataAosDuration="1000"
						dataAosOffset="350"
						Image={KDImg3}
						Heading="Full Resource Control"
					/>
					<KeyDSingleCard
						dataAos="fade-left"
						dataAosDuration="1000"
						dataAosOffset="350"
						Image={KDImg4}
						Heading="Upload ISO / Mount ISO"
					/>
					<KeyDSingleCard
						dataAos="fade"
						dataAosDuration="1000"
						dataAosOffset="350"
						Image={KDImg5}
						Heading="Linux, Windows and BSD"
					/>
					<KeyDSingleCard
						dataAos="fade-right"
						dataAosDuration="1000"
						dataAosOffset="350"
						Image={KDImg6}
						Heading="No Long Term Contracts"
					/>
				</div>
			</div>
		</div>
	);
};

export default KeyDifferentiate;
