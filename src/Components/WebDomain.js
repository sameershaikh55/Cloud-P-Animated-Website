import React, { useEffect } from "react";

// IMPORTING SHAPES
import shape1 from "../Images/BGShape1.png";
import shape2 from "../Images/BgCLoud2.png";
import shape3 from "../Images/BgCLoud3.png";

// importing AOS for animations
import AOS from "aos";
import "aos/dist/aos.css";

const WebDomain = () => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div
			data-aos="fade-up"
			data-aos-duration="1000"
			data-aos-offset="450"
			className="WebDomainContainer"
		>
			{/* ==== SHAPES HTML START ==== */}
			<div
				data-aos="fade-right"
				data-aos-duration="1100"
				data-aos-offset="550"
				className="WDshape1Container"
			>
				<img src={shape1} alt="#" />
			</div>
			<div
				data-aos="fade-left"
				data-aos-duration="1100"
				data-aos-offset="200"
				className="WDshape2Container"
			>
				<img src={shape1} alt="#" />
			</div>
			<div
				data-aos="fade-up"
				data-aos-duration="1100"
				data-aos-offset="500"
				className="WDshape3Container"
			>
				<img src={shape2} alt="#" />
			</div>
			<div
				data-aos="fade-right"
				data-aos-duration="1100"
				data-aos-offset="200"
				className="WDshape4Container"
			>
				<img src={shape3} alt="#" />
			</div>
			<div
				data-aos="fade-right"
				data-aos-duration="1100"
				data-aos-offset="500"
				className="WDshape5Container"
			>
				<img src={shape3} alt="#" />
			</div>
			{/* ==== SHAPES HTML END ==== */}

			{/* ==== UPPER SVG START ==== */}
			<div className="custom-shape-divider-top-1612624581">
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path
						d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
						opacity=".25"
						className="shape-fill"
					></path>
					<path
						d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
						opacity=".5"
						className="shape-fill"
					></path>
					<path
						d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
						className="shape-fill"
					></path>
				</svg>
			</div>
			{/* ==== UPPER SVG END ==== */}

			<div
				data-aos="zoom-in"
				data-aos-duration="1100"
				data-aos-offset="550"
				className="WebDomainInnerContainer"
			>
				<div className="container">
					<div className="row">
						{/* <!--start section heading--> */}
						<div className="col-lg-6 offset-lg-3">
							<div className="afterHeadingAnimationContainer WDHeadingContainer mb-4 text-center">
								<h2>Search Your Web Domain</h2>
							</div>
						</div>
						{/* <!--end section heading--> */}
					</div>
					<div className="row">
						{/* <!--start domain search box--> */}
						<div className="col-lg-8 offset-lg-2">
							<div className="DomainBoxContainer">
								<form action="#" method="post">
									<div className="DomainFormInner">
										<input
											type="text"
											className="FormInputControl"
											placeholder="Enter domain name here"
										/>
										<div className="DomainSelectContainer">
											<span>
												<i className="icofont-simple-down"></i>
											</span>
											<select className="form-control">
												<option>.com</option>
												<option>.net</option>
												<option>.org</option>
												<option>.biz</option>
												<option>.uk</option>
											</select>
										</div>
										<button type="submit">Search</button>
									</div>
								</form>
							</div>
							{/* <!--start domain price--> */}
							<div className="DomainPricesContainer">
								<ul>
									<li>
										.com <span>$6.50</span> <del>$9</del>
									</li>
									<li>
										<small>|</small>
									</li>
									<li>
										.net <span>$10</span> <del>$12</del>
									</li>
									<li>
										<small>|</small>
									</li>
									<li>
										.org <span>$11</span> <del>$15</del>
									</li>
									<li>
										<small>|</small>
									</li>
									<li>
										.us <span>$9.50</span> <del>$12.50</del>
									</li>
									<li>
										<small>|</small>
									</li>
									<li>
										.me <span>$7.50</span> <del>$9</del>
									</li>
								</ul>
							</div>
							{/* <!--end domain price--> */}
						</div>
						{/* <!--end domain search box--> */}
					</div>
				</div>
			</div>

			{/* ==== BOTTOM SVG START ==== */}
			<div className="custom-shape-divider-bottom-1612624937">
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path
						d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
						opacity=".25"
						className="shape-fill"
					></path>
					<path
						d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
						opacity=".5"
						className="shape-fill"
					></path>
					<path
						d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
						className="shape-fill"
					></path>
				</svg>
			</div>
			{/* ==== BOTTOM SVG END ==== */}
		</div>
	);
};

export default WebDomain;
