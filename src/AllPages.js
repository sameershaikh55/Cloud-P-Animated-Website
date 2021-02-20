import React, { useState, useEffect } from "react";
import "./App.css";

// REACT ROUTER DOM IMPORT
import { Switch, Route } from "react-router-dom";

// IMPORTING BOOTSTRAP FILE
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// IMPORTING NAVBAR
import Navbar from "./Components/Navbar";

// IMPORTING NAV COMPONENTS
import Home from "./Components/Home";
import About from "./Components/About";
import Hosting from "./Components/Hosting";
import Service from "./Components/Service";
import Contact from "./Components/Contact";
import UpperBar from "./Components/UpperBar";

// BACKGROUND IMAGE IMPORT
import BgImg from "./Images/mainPageBG.png";

// WEB DOMAIN COMPONENT IMPORT
import WebDomain from "./Components/WebDomain";
import HowItsWork from "./Components/HowItsWork";
import KeyDifferentiate from "./Components/KeyDifferentiate";
import GServerLocations from "./Components/GServerLocations";
import Footer from "./Components/Footer";

import Shape1 from "./Images/BGShape1.png";
import SideBar from "./Components/SideBar";
import ScrolltoTop from "./Components/ScrolltoTop";

// importing AOS for animations
import AOS from "aos";
import "aos/dist/aos.css";

function AllPages() {
	useEffect(() => {
		AOS.init();
	}, []);

	const [isOpen, setIsOpen] = useState(false);

	const OnClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="PagesContainer">
			<SideBar ClickEvent={OnClick} isOpen={isOpen} />
			<div
				data-aos="fade-right"
				data-aos-duration="1000"
				data-aos-offset="350"
				className="HIWShape1"
			>
				<img src={Shape1} alt="" />
			</div>
			<div
				data-aos="fade-left"
				data-aos-duration="1000"
				data-aos-offset="350"
				className="HIWShape2"
			>
				<img src={Shape1} alt="" />
			</div>
			<img src={BgImg} alt="Cloud_Computing" className="BgSVG" />
			<div className="InnerAllPContainer">
				<UpperBar />
				<Navbar ClickEvent={OnClick} />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
					<Route exact path="/hosting" component={Hosting} />
					<Route exact path="/service" component={Service} />
					<Route exact path="/contact" component={Contact} />
				</Switch>
			</div>
			<WebDomain />
			<HowItsWork />
			<Service />
			<About />
			<KeyDifferentiate />
			<Hosting />
			<GServerLocations />
			<Contact />
			<Footer />
			<ScrolltoTop />
		</div>
	);
}

export default AllPages;
