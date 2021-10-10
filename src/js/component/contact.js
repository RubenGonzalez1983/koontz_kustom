import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "../../styles/home.scss";

export const ContactUs = () => {
	const form = useRef();

	const sendEmail = e => {
		e.preventDefault();

		emailjs.sendForm("service_9gyr8mr", "template_fhrii5l", form.current, "user_xEbved8R2ctCBnhDEdffV").then(
			result => {
				console.log(result.text);
			},
			error => {
				console.log(error.text);
			}
		);
	};

	return (
		<form ref={form} onSubmit={sendEmail}>
			<header className="center">Get in touch!</header>

			<form id="form" className="topBefore">
				<input id="name" type="text" placeholder="NAME" />
				<input id="email" type="text" placeholder="E-MAIL" />
				<textarea id="message" type="text" placeholder="MESSAGE" />
				<input id="submit" type="submit" value="GO!" />
			</form>
			<header className="center">
				Or e-mail me directly at:
				<br /> koontzkustoms@gmail.com
			</header>
		</form>
	);
};
