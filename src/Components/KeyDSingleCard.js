import React, { useEffect } from "react";

// AOS IMPORT
import AOS from "aos";
import "aos/dist/aos.css";

const KeyDSingleCard = ({
	Image,
	Heading,
	dataAos,
	dataAosDuration,
	dataAosOffset,
}) => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div
			data-aos={dataAos}
			data-aos-duration={dataAosDuration}
			data-aos-offset={dataAosOffset}
			className="col-lg-4 col-md-6 col-sm-12"
		>
			<div className="iq-icon-box iq-icon-box-style-1">
				<div className="icon-box-img">
					<img src={Image} className="img-fluid" alt="QLOUD" />
				</div>
				<div className="icon-box-content">
					<h5 className="icon-box-title">
						<a href="upperNavbar">{Heading}</a>
					</h5>
					<p className="icon-box-desc">
						It is a long established fact that a reader will be distracted by
						the of readable content.
					</p>
				</div>
			</div>
		</div>
	);
};

export default KeyDSingleCard;
