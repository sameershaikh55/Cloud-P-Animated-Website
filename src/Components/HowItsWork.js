import React, { useEffect } from "react";

// HOW ITS WORKS STEOS IMAGES
import HIWImage1 from "../Images/HowItsWork-Img1.png";
import HIWImage2 from "../Images/HowItsWork-Img2.png";
import HIWImage3 from "../Images/HowItsWork-Img3.png";

// STEPS BETWEEN ARROW IMAGE
import ArrowImg from "../Images/HowItsWork-Img4.png";

// importing AOS for animations
import AOS from "aos";
import "aos/dist/aos.css";

const HowItsWork = () => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div id="service" className="HIWContainer">
			<div
				data-aos="fade-up"
				data-aos-duration="1000"
				data-aos-offset="350"
				className="container"
			>
				<div className="row">
					<div className="col-lg-12">
						<div className="afterHeadingAnimationContainer text-center iq-title-box">
							<h2 className="iq-title">Instant Deploys For All Your Apps</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4 mb-lg-0 mb-5">
						<div className="text-center">
							<div className="iq-process-step">
								<img
									className="HIWArrowImg iq-before-img img-fluid"
									src={ArrowImg}
									alt="arro/w-img"
								/>
								<div>
									<img className="img-fluid" src={HIWImage1} alt="fancybox" />
								</div>
								<div>
									<h4 className="iq-step-title mt-3 mb-3">
										Select a service type
									</h4>
									<span className="iq-step-desc">
										It is a long established fact that a freader will be
										distracted by the .
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 mb-lg-0 mb-5">
						<div className="text-center">
							<div className="iq-process-step">
								<img
									className="HIWArrowImg iq-before-img img-fluid"
									src={ArrowImg}
									alt="arro/w-img"
								/>
								<div>
									<img className="img-fluid" src={HIWImage2} alt="fancybox" />
								</div>
								<div>
									<h4 className="iq-step-title mt-3 mb-3">Deploy in seconds</h4>
									<span className="iq-step-desc">
										It is a long established fact that a freader will be
										distracted by the .
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="text-center">
							<div className="iq-process-step">
								<div>
									<img className="img-fluid" src={HIWImage3} alt="fancybox" />
								</div>
								<div>
									<h4 className="iq-step-title mt-3 mb-3">
										Update automatically
									</h4>

									<span className="iq-step-desc">
										It is a long established fact that a freader will be
										distracted by the .
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HowItsWork;
