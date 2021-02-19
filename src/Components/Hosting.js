import React, { useEffect } from "react";

// IMPORTING REACT ICONS
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import HostingSingleCard from "./HostingSingleCard";

import CloudShape1 from "../Images/BgCLoud3.png";

// AOS IMPORT
import AOS from "aos";
import "aos/dist/aos.css";

const Hosting = () => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div id="hosting" className="container">
			<div
				data-aos="fade-right"
				data-aos-duration="1000"
				data-aos-offset="380"
				className="CloudShapeContainerLeft"
			>
				<img src={CloudShape1} alt="" />
			</div>
			<div
				data-aos="fade-right"
				data-aos-duration="1000"
				data-aos-offset="380"
				className="CloudShape2ContainerLeft"
			>
				<img src={CloudShape1} alt="" />
			</div>
			<div className="row">
				<div className="col-12">
					<div className="col-lg-12">
						<div className="text-center afterHeadingAnimationContainer">
							<div
								data-aos="fade-up"
								data-aos-duration="1000"
								data-aos-offset="200"
								className="HostingHeading"
							>
								<h2>Web Hosting Plans</h2>
							</div>
						</div>
					</div>
					<div id="products" className="price-table-container">
						<div className="row">
							<HostingSingleCard
								dataAos="fade-up"
								dataAosDuration="1000"
								dataAosOffset="350"
								LogoColor="StandardIcon"
								PackageName="standard"
								PackagePrice="$10.00"
								PackageDuration="One Time"
								ForChecked={FaCheck}
								ForUnChecked={ImCross}
								UnChecked="not-checked"
								UnPSChecked="not-checked"
								ForHide="HideClass"
								HidePS_LCSRowForStandard="HideClass"
							/>
							<HostingSingleCard
								dataAos="fade-up"
								dataAosDuration="1200"
								dataAosOffset="450"
								LogoColor="AdvancedIcon"
								PackageName="advenced"
								PackagePrice="$30.00"
								PackageDuration="/mo"
								PopularPackage="most popular"
								ForChecked={FaCheck}
								ForUnChecked={ImCross}
								UnPSChecked="not-checked"
								HidePS_LCSRowForAdvanced="HideClass"
								// PopularPackageStyling="popularPackage"
							/>
							<HostingSingleCard
								dataAos="fade-up"
								dataAosDuration="1400"
								dataAosOffset="550"
								LogoColor="EntrepriseIcon"
								PackageName="entreprise"
								PackagePrice="$12.00"
								PackageDuration="/yr"
								ForChecked={FaCheck}
								ForUnChecked={ImCross}
								ForHide="HideClass"
								HidePS_LCSRowForEnterprise="HideClass"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hosting;
