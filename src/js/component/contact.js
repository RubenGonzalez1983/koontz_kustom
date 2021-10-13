import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "../../styles/home.scss";

export default function ContactUs (){
	function sendEmail(e){
		e.preventDefault();
	

		emailjs.sendForm("service_9gyr8mr", "template_fhrii5l", form.current, "user_xEbved8R2ctCBnhDEdffV").then(
			(result) => {
				console.log(result.text);
			},
			error => {
				console.log(error.text);
			}
		);}
		e.target.reset();
	};

	return (
		<form ref={form} onSubmit={sendEmail}>
			<header className="center">Get in touch!</header>

			<form id="form" className="topBefore">
				<input type="text" placeholder="NAME" name="name" />
				<input type="email" placeholder="E-MAIL" name="email" />
				<textarea type="text" placeholder="MESSAGE" name="message" />
				<input id="submit" type="submit" value="GO!" />
			</form>
			<header className="center">
				Or e-mail me directly at:
				<br /> koontzkustoms@gmail.com
			</header>
		</form>
	);
};
