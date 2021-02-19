import React from "react";

// IMPORTING REACT-SCROLL
import { Link } from "react-scroll";

// IMPORTING RIGHT SIDE IMAGE
import RightSideImg from "../Images/img5.png";

// REACT ICONS
import { GrSoundcloud } from "react-icons/gr";
import { FaCloudsmith, FaLayerGroup } from "react-icons/fa";
import { MdCloudDone } from "react-icons/md";
import { AiOutlineCloudSync } from "react-icons/ai";

import shape3 from "../Images/BgCLoud3.png";
import shape4 from "../Images/BgCloud1.png";

const Home = () => {
	return (
		<div id="home" className="HomeContainer container-fluid">
			<div className="HShape3Container">
				<img src={shape4} alt="#" />
			</div>
			<div className="HShape5Container">
				<img src={shape4} alt="#" />
			</div>
			<div className="row">
				<div className="col-10 mx-auto">
					<div className="row">
						<div className="col-6 LeftSideHContainer">
							<h1 className="HLeftSideText">
								<div>Best And Powerful</div>
								<div>Hosting Service</div>
								<div>Provider</div>
							</h1>
							<p className="HLeftSideBelowPara">
								A managed hosting platform that facilitates choice, simplicity,
								and performance.
							</p>
							<Link to="hosting" smooth={true} duration={600} offset={-120}>
								<div class="button" id="button-7">
									<div id="dub-arrow">
										<img
											src="https://github.com/atloomer/atloomer.github.io/blob/master/img/iconmonstr-arrow-48-240.png?raw=true"
											alt=""
										/>
									</div>
									<a href="btn">Start a Free Trail</a>
								</div>
							</Link>
							<div className="HIconsContainer">
								<GrSoundcloud className="HomeIcon HomeIcon1" />
								<FaCloudsmith className="HomeIcon HomeIcon2" />
								<MdCloudDone className="HomeIcon HomeIcon3" />
								<FaLayerGroup className="HomeIcon HomeIcon4" />
								<AiOutlineCloudSync className="HomeIcon HomeIcon5" />
							</div>
							<div className="HShape4Container">
								<img src={shape4} alt="#" />
							</div>
						</div>
						<div className="HRightSideImg col-lg-6 col-md-6 col-sm-12">
							<div className="HRightSideInnerImg">
								<div className="HShape1Container">
									<img src={shape3} alt="#" />
								</div>
								<div className="HShape2Container">
									<img src={shape3} alt="#" />
								</div>
								<img
									src={RightSideImg}
									className="HRightSideImg"
									alt="Cloud_Computing"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
