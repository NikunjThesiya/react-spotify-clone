import React from "react";
import "./Login.css";
import { motion } from "framer-motion";
import { loginUrl } from "../spotify";

const Login = () => {
    
	return (
		<div className="login">
			{/* Spotify Logo */}
			<motion.img
				src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
				alt="Spotify Logo"
				initial={{ y: -300 }}
				animate={{ y: 0 }}
			/>
			{/* Login with Spotify Button */}
			<motion.a
				href={loginUrl}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
			>
				LOGIN WITH SPOTIFY
			</motion.a>
		</div>
	);
};

export default Login;
