import React from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const About = () => (
	<div className="bodyweb">
		{" "}
		<br /> <br /> <br />
		<div className="webtags">
			<img className="picabout" src="https://i.ibb.co/1K3GF8f/IMG-1027.jpg" />
			<div>
				<br /> <br />
				<h1>About Koontz Kustom Guitars </h1>
				<p>
					I founded Koontz Guitars in 2016 somewhere between the Atlantic Ocean and the Florida Everglades in
					the Hurricane Winds of Miami, FL. U.S.A. <br /> <br />
					From 1994 to 2007, I toured extensively with my punk rock band, Against All Authority. After abusing
					my guitars for so many years, I became very interested in creating what I loved the most. <br />{" "}
					<br />
					One day I got tired of buying stock guitars to modify and change them to fit my needs. That led me
					to create my first model, The Tropic Thunder. <br /> <br />
					Using my background in Punk Rock DIY ethics, I design and draw out my instruments by hand. Then I
					build them mainly using hand tools, utilizing the best quality hardware and electronics available.{" "}
					<br /> <br />
					Sorry if some of my sweat soaks into the wood of your brand new hand-built guitar. <br /> <br />
					Check out my <Link to="/repairs">repair services</Link> and some of the guitars I&apos;ve built by
					request.
				</p>
				<br />
				<br />
				<br />
			</div>
		</div>
	</div>
);
