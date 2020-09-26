import React from "react";
import { motion } from "framer-motion";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "../DataLayer";

const Sidebar = () => {
	const [{ playlists }, dispatch] = useDataLayerValue();
	return (
		<div className="sidebar">
			<motion.img
				src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
				alt="Spotify Logo"
				className="sidebar__logo"
				initial={{ y: -300 }}
				animate={{ y: 0 }}
			/>

			<SidebarOption Icon={HomeIcon} title="Home" />
			<SidebarOption Icon={SearchIcon} title="Search" />
			<SidebarOption Icon={LibraryMusicIcon} title="Your Library" />

			<br />
			<h4 className="sidebar__title">PLAYLISTS</h4>
			<hr />

			{playlists?.items?.map((playlist) => (
				<SidebarOption title={playlist.name} />
			))}

			{/* <SidebarOption title="Rock" />
			<SidebarOption title="Alan Walker" /> */}
		</div>
	);
};

export default Sidebar;
