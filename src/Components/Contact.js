import React, { useEffect } from "react";

import { Button } from "@material-ui/core";

import Shape1 from "../Images/BgCLoud3.png";

// importing AOS for animations
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div
			data-aos="fade-in"
			data-aos-duration="1200"
			data-aos-offset="350"
			id="contact"
			className="ContactUsContainer"
		>
			<div
				data-aos="zoom-in"
				data-aos-duration="1200"
				data-aos-offset="350"
				className="ContactUSCloudShape1"
			>
				<img src={Shape1} alt="" />
			</div>
			<div
				data-aos="zoom-in"
				data-aos-duration="1200"
				data-aos-offset="350"
				className="ContactUSCloudShape2"
			>
				<img src={Shape1} alt="" />
			</div>
			<div
				data-aos="zoom-in"
				data-aos-duration="1200"
				data-aos-offset="350"
				className="ContactUSCloudShape3"
			>
				<img src={Shape1} alt="" />
			</div>
			<div className="InnerContainer">
				<div className="container">
					<div className="row">
						<div
							data-aos="fade-right"
							data-aos-duration="1200"
							data-aos-offset="350"
							className="col-lg-6 col-md-12 order-sm-2 order-lg-1"
						>
							<div className="ContactUSContainer">
								<div className="mapContainer">
									<iframe src="https://www.google.com/maps?q=Karachi%2C%20Pakistan&z=17&t=&ie=UTF8&output=embed"></iframe>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-md-12 order-sm-1 order-lg-2">
							<div className="ContactUsHeaderContainer text-left">
								<h1
									data-aos="fade-left"
									data-aos-duration="1200"
									data-aos-offset="350"
								>
									Contact With US
								</h1>
								<p
									data-aos="fade-left"
									data-aos-duration="1200"
									data-aos-offset="350"
								>
									It is a long established fact that a reader will be distracted
								</p>
							</div>
							<div
								data-aos="fade-left"
								data-aos-duration="1200"
								data-aos-offset="350"
								className="FormContainer"
							>
								<form>
									<div className="row">
										<div
											data-aos="fade-left"
											data-aos-duration="1200"
											data-aos-offset="350"
											className="TextFieldContainer col-lg-6"
										>
											<input
												type="text"
												placeholder="First Name"
												className="TextField"
											/>
										</div>
										<div
											data-aos="fade-left"
											data-aos-duration="1200"
											data-aos-offset="350"
											className="TextFieldContainer col-lg-6"
										>
											<input
												type="text"
												placeholder="Last Name"
												className="TextField"
											/>
										</div>
										<div
											data-aos="fade-left"
											data-aos-duration="1200"
											data-aos-offset="350"
											className="TextFieldContainer col-lg-6"
										>
											<input
												type="number"
												placeholder="Phone"
												className="TextField"
											/>
										</div>
										<div
											data-aos="fade-left"
											data-aos-duration="1200"
											data-aos-offset="350"
											className="TextFieldContainer col-lg-6"
										>
											<input
												type="text"
												placeholder="Email"
												className="TextField"
											/>
										</div>
										<div
											data-aos="fade-left"
											data-aos-duration="1200"
											data-aos-offset="350"
											className="TextFieldContainer col-12"
										>
											<textarea
												type="text"
												placeholder="Message"
												className="ContactFormMessage"
												rows="5"
											></textarea>
											<div
												data-aos="fade-left"
												data-aos-duration="1200"
												data-aos-offset="100"
												className="contactUSBtnContainer"
											>
												<Button
													style={{
														backgroundColor: "#0d1e67",
														height: "3.8rem",
														color: "white",
														fontSize: "1.4rem",
													}}
													className="ContactFormBtn"
													variant="contained"
												>
													Submit
												</Button>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
