import React from "react";
import { FaEnvelope, FaPhoneAlt, FaUserAlt } from "react-icons/fa";
import { BsChatSquareDotsFill, BsLockFill } from "react-icons/bs";

const UpperBar = () => {
	return (
		<div id="upperNavbar" className="MMainContainer container-fluid">
			<div className="row">
				<div className="IPContainer col-sm-6">
					<div className="IPInnerContainer row">
						{/* ============== EMAIL PORTION START =============== */}
						<div className="EmailContainer col-xl-4 col-lg-5 col-6">
							<span className="mr-2">
								<FaEnvelope className="IEmail" />
							</span>
							<span>info@example.com</span>
						</div>
						{/* ============== EMAIL PORTION END =============== */}

						{/* ============== PHONE PORTION START =============== */}
						<div className="PhoneContainer col-xl-8 col-lg-7 col-6">
							<span className="mr-1">
								<FaPhoneAlt className="IPhone" />
							</span>
							<span>+92 01234 56789</span>
						</div>
						{/* ============== PHONE PORTION END =============== */}
					</div>
				</div>

				<div className="LLRContainer col-sm-6">
					<div className="LLRInnerContainer row offset-xl-5 offset-lg-4 offset-md-2">
						{/* ============== CHAT PORTION START =============== */}
						<div className="LCContainer">
							<span className="mr-1">
								<BsChatSquareDotsFill className="ILiveChat" />
							</span>
							<span className="LiveChatText ml-2">Live Chat</span>
						</div>
						{/* ============== CHAT PORTION END =============== */}

						{/* ============== LOGIN PORTION START =============== */}
						<div className="LContainer ml-sm-5 ml-lg-5 ml-md-4">
							<span className="mr-1">
								<BsLockFill className="ILogin" />
							</span>
							<span className="LoginText ml-2">Login</span>
						</div>
						{/* ============== LOGIN PORTION END =============== */}

						{/* ============== REGISTERS PORTION START =============== */}
						<div className="RContainer ml-sm-5 ml-lg-5 ml-md-4">
							<span className="mr-1">
								<FaUserAlt className="IRegister" />
							</span>
							<span className="RegisterText ml-2">Register</span>
						</div>
						{/* ============== REGISTER PORTION END =============== */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default UpperBar;
