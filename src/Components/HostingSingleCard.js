import React, { useEffect } from "react";

import { FaFire } from "react-icons/fa";

// AOS IMPORT
import AOS from "aos";
import "aos/dist/aos.css";

const HostingSingleCard = ({
	LogoColor,
	PackageName,
	PackagePrice,
	PackageDuration,
	ForChecked,
	PopularPackage,
	ForHide,
	UnChecked,
	UnPSChecked,
	ForUnChecked,
	HidePS_LCSRowForStandard,
	HidePS_LCSRowForAdvanced,
	HidePS_LCSRowForEnterprise,
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
			className="col-md-4"
		>
			<div className="popularPackage tree-steps-hosting-plans cart-whmcs-custom-hosting-order">
				<span className={`tree-steps-hosting-plans-best ${ForHide}`}>
					{PopularPackage}
				</span>
				<div className="tree-steps-hosting-plans-header">
					<FaFire className={`HostingIcons ${LogoColor}`} />
					<div className="PackageNamePriceC">
						<div>
							<h5 className="tree-steps-hosting-plans-title">
								{PackageName} <small></small>
							</h5>
						</div>

						<div>
							<span className="tree-steps-hosting-plans-price monthly">
								<b>
									<span>{PackagePrice}</span> {PackageDuration}
								</b>
							</span>
						</div>
					</div>
				</div>
				<div className="price-table">
					<ul className="tree-steps-hosting-plans-list">
						<li className="row">
							<span className="col-6 text-left">2 TB of space</span>
							<span className="col-6 text-right">
								<ForChecked />
							</span>
						</li>
						<li className="row">
							<span className="col-6 text-left">unlimited bandwidth</span>
							<span className="col-6 text-right">
								<ForChecked />
							</span>
						</li>
						<li className="row">
							<span className="col-6 text-left">full backup systems</span>
							<span className="col-6 text-right">
								<ForChecked />
							</span>
						</li>
						<li className="row">
							<span className="col-6 text-left">free domain</span>
							<span className="col-6 text-right">
								<ForChecked />
							</span>
						</li>
						<li className="row">
							<span className="col-6 text-left">unlimited database</span>
							<span className="col-6 text-right">
								<ForChecked />
							</span>
						</li>
						<li
							className={`${HidePS_LCSRowForAdvanced} ${HidePS_LCSRowForEnterprise} row`}
						>
							<span className={`${UnChecked} col-6 text-left`}>
								live chat support
							</span>
							<span className="col-6 text-right">
								<ForUnChecked />
							</span>
						</li>
						{/* ===== COPY OF LIVE CHAT SUPPORT START ===== */}
						<li className={`${HidePS_LCSRowForStandard} row`}>
							<span className="col-6 text-left">live chat support</span>
							<span className="col-6 text-right">
								<ForChecked />
							</span>
						</li>

						<li className={`${HidePS_LCSRowForEnterprise} row`}>
							<span className={`${UnPSChecked} col-6 text-left`}>
								phone support
							</span>
							<span className="col-6 text-right">
								<ForUnChecked />
							</span>
						</li>
						{/* ===== COPY OF LIVE CHAT SUPPORT END ===== */}
						{/* ===== COPY OF PHONE SUPPORT START ===== */}
						<li
							className={`${HidePS_LCSRowForStandard} ${HidePS_LCSRowForAdvanced} row`}
						>
							<span className={`col-6 text-left`}>phone support</span>
							<span className="col-6 text-right">
								<ForChecked />
							</span>
						</li>
						{/* ===== COPY OF PHONE SUPPORT END ===== */}
					</ul>
					<div className="tree-steps-hosting-plans-footer text-center">
						<div className="button6th_container">
							<button className="btn6th">
								<span>Order Now</span>
							</button>
						</div>
					</div>
				</div>
				<div className="palans-setup-free-styles">
					<small>$5.00 Setup Fee</small>
				</div>
			</div>
		</div>
	);
};

export default HostingSingleCard;
