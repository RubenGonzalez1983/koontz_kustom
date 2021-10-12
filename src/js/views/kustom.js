import React from "react";
import "../../styles/home.scss";
import YoutubeEmbed from "../component/YoutubeEmbed";

export const Kustom = () => (
	<div>
		<br /> <br /> <br />
		<p className="textkustom">
			Here&apos;s a collection of guitars I&apos;ve built by request or just becuase. If you are interested in
			building a kustom guitar, let&apos;s talk. <br />
			Also, make sure to check out my store. I have some for sale.
		</p>
		<br />
		<div className="kustom">
			<div className="guitars">
				<img className="kustomgtr" src="https://i.ibb.co/bF83PHd/tropic-thunder.jpg" />

				<div className="middle">
					<div className="text">
						<h3>Tropic Thunder</h3>
						<br />
						Mahogany Body
						<br />
						25.5 Scale Mahogany neck
						<br />
						Benson Custom P90s
						<br />
						Inca Silver and Mirror Pickguard
					</div>
				</div>
			</div>

			<div className="guitars">
				<img className="kustomgtr" src="https://i.ibb.co/fDDQs43/the-dag.jpg" />

				<div className="middle">
					<div className="text">
						<h3>The Dag</h3>
						<br />
						Mahogany Body
						<br />
						24.75 Scale Neck
						<br />
						Wilde Bill L500 Humbuckers
						<br />
						Natural Walnut Stain
					</div>
				</div>
			</div>

			<div className="guitars">
				<img className="kustomgtr" src="https://i.ibb.co/wYgWqrQ/the-strummer.jpg" />

				<div className="middle">
					<div className="text">
						<h3>The Strummer Electric Parlor Guitar</h3>
						<br />
						Mahogany Chambered Hollow Body with Carved Mahogany cap
						<br />
						24 Scale Neck with Slotted Headstock
						<br />
						CC Blade Pickups by Pete Biltoft Vintage Vibe Pickups
						<br />
						Black and Natural Mahogany
						<br />
						$2,400
					</div>
				</div>
			</div>

			<div className="guitars">
				<img className="kustomgtr" src="https://i.ibb.co/f1wKW2q/the-maverick.jpg" />

				<div className="middle">
					<div className="text">
						<h3>The Maverick Jon Nuñez Model</h3>
						<br />
						Mahogany Body <br />
						Robot Graves Aluminum Neck <br />
						Wilde Bill L500L Pickup
						<br />
						Master OMV Bridge and Tremolo
						<br />
						Natural Walnut
						<br />
						$3,200
					</div>
				</div>
			</div>

			<div className="guitars">
				<img className="kustomgtr" src="https://i.ibb.co/Zc2d2zJ/the-maverick-bass.jpg" />

				<div className="middle">
					<div className="text">
						<h3>The Maverick Bass</h3>
						<br />
						Mahogany Body
						<br />
						32 scale Maple neck
						<br />
						Benson Custom Pickups
						<br />
						Surf Green
						<br />
						$1,900
					</div>
				</div>
			</div>

			<div className="guitars">
				<img className="kustomgtr" src="https://i.ibb.co/JFQNHfR/thr-jett.jpg" />

				<div className="middle">
					<div className="text">
						<h3>The Jett</h3>
						<br />
						Alder Body
						<br />
						Maple Neck
						<br />
						Featured in Rose Gold
						<br />
						$1,500
					</div>
				</div>
			</div>
		</div>
	</div>
);
