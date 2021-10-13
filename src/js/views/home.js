import React from "react";
import "../../styles/home.scss";
import YoutubeEmbed from "../component/YoutubeEmbed";
import { Footer } from "../component/footer";

export const Home = () => (
	<div>
		<div className="body">
			<div className="logodiv">
				<br /> <br />
				<img className="logo" src="https://koontzguitars.com/wp-content/uploads/2021/03/koontz_logo_temp.png" />
				<h1 className="logoh1">MIAMI, FL</h1>
				<br />
			</div>
		</div>
		<Footer />
	</div>
);

/* <div className="icons">
				<a href="https://www.instagram.com/koontzguitars/?hl=en">
					<img
						className="iconlinks"
						src="https://i.ibb.co/DMhB1ZR/pngarea-com-instagram-logopng-ig-6730669.png"
					/>
				</a>
			</div> */
