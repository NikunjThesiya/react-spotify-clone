import React from "react";
import Body from "./Body";
import Footer from "./Footer";
import "./Player.css";
import Sidebar from "./Sidebar";

const Player = ({ spotify }) => {
	return (
		<div className="player">
			<div className="player__body">
				{/* Sidebar */}
				<Sidebar />

				{/* Body */}
				<Body spotify={spotify} />
			</div>
			<Footer />
			{/* Footer */}
		</div>
	);
};
export default Player;
