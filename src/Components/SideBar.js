import React from "react";

const SideBar = ({ HideClass }) => {
	return (
		<div className={`${HideClass} SideBarContainer`}>
			<ul>
				<li>Home</li>
				<li>About</li>
				<li>Service</li>
				<li>Contact</li>
				<li>Hosting</li>
			</ul>
		</div>
	);
};

export default SideBar;
