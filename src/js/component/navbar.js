import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const [showmenu, setShowmenu] = useState(" ");
	return (
		<nav className="navbar navbar-expand-lg nav-fixed navbar-light nav">
			<button
				onClick={() => (showmenu == " " ? setShowmenu("show") : setShowmenu(" "))}
				className="navbar-toggler navcolor"
				type="button"
				data-bs-toggle="collapse"
				data-target="#navbarTogglerDemo03"
				aria-controls="navbarTogglerDemo03"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>

			<div className={"collapse navbar-collapse  " + showmenu} id="navbarTogglerDemo03">
				<ul className="navbar-nav mr-auto mt-2 mt-lg-0 navright nav">
					<li className="navbarfont">
						<a className="link" href="/">
							<img className="navlogo" src="https://i.ibb.co/ypTrQHH/koontzlogoflatnav.jpg" />
						</a>
					</li>

					<li className="navbarfont">
						<a className="nav-link hover link" href="/">
							HOME
						</a>
					</li>

					<li className="navbarfont">
						<a className="nav-link hover link" href="/repairs">
							REPAIR SERVICES
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link hover link" href="/kustom">
							KUSTOM GUITARS
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link hover link" href="/about">
							ABOUT
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link hover link " href="/contact">
							CONTACT
						</a>
					</li>
					{/* <li className="nav-item">
						<a className="nav-link hover link" href="tel:305-343-3807">
							305-343-3807
						</a>
					</li> */}
				</ul>
			</div>
		</nav>
	);
};
