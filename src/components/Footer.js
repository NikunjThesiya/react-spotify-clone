import React from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousTwoToneIcon from "@material-ui/icons/SkipPreviousTwoTone";
import SkipNextTwoToneIcon from "@material-ui/icons/SkipNextTwoTone";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__content">
				<div className="footer__left">
					<img
						src="https://upload.wikimedia.org/wikipedia/en/8/89/Sooraj_Dooba_Hain.jpg"
						className="footer__albumLogo"
						alt=""
					/>
					<div className="footer__songInfo">
						<h4>Sooraj Dooba Hain</h4>
						<p>Arijit Singh</p>
					</div>
				</div>
				<div className="footer__center">
					<ShuffleIcon className="footer__green" />
					<SkipPreviousTwoToneIcon className="footer__icon" />
					<PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
					<SkipNextTwoToneIcon className="footer__icon" />
					<RepeatIcon className="footer__green" />
				</div>
				<div className="footer__right">
					<Grid container spacing={2}>
						<Grid item>
							<PlaylistPlayIcon />
						</Grid>
						<Grid item>
							<VolumeDownIcon />
						</Grid>
						<Grid item xs>
							<Slider />
						</Grid>
					</Grid>
				</div>
			</div>
		</div>
	);
};

export default Footer;
