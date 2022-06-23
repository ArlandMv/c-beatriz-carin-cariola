import React, { useState } from 'react';
import { images } from '../../constants';
import './Footer.scss';

import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';

const Footer = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);

	const { name, email, message } = formData;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		//const { message, value } = e.target;

		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = () => {
		setLoading(true);

		const contact = {
			_type: 'contact',
			name: name,
			email: email,
			message: message,
		};

		client.create(contact).then(() => {
			setLoading(false);
			setIsFormSubmitted(true);
		});
	};

	return (
		<>
			<h2 className="head-text">
				Vuoi <span>parlare?</span>
			</h2>

			<div className="app__footer-cards">
				<div className="app__footer-card">
					<img src={images.email} alt="email" />
					<div>
						<p>Scrivimi: </p>
						<a href="mailto:bmarincar@gmail.com" className="p-text">
							bmarincar@gmail.com
						</a>
					</div>
				</div>
				<div className="app__footer-card">
					<img src={images.mobile} alt="mobile" />
					<div className="">
						<p>Chiamami: </p>
						<a href="tel: +56997722404" className="p-text">
							+56 (9) 9772-2404
						</a>
					</div>
				</div>
				<p className="p-text">Oppure puoi fissare un appuntamento con me.</p>
			</div>

			{!isFormSubmitted ? (
				<div className="app__footer-form app__flex">
					<div className="app__flex">
						<input
							type="text"
							placeholder="Il Tuo Nome"
							name="name"
							value={name}
							onChange={handleChangeInput}
							className="p-text"
						/>
					</div>

					<div className="app__flex">
						<input
							type="email"
							placeholder="La tua e-mail"
							name="email"
							value={email}
							onChange={handleChangeInput}
							className="p-text"
						/>
					</div>

					<div className="app__flex">
						<textarea
							className="p-text"
							placeholder="Il tuo messaggio"
							name="message"
							value={message}
							onChange={handleChangeInput}
						/>
					</div>
					<button type="button" className="p-text" onClick={handleSubmit}>
						{loading ? 'Inviando mesaggio' : 'Invia messaggio'}
					</button>
				</div>
			) : (
				<div className="head-text">Grazie</div>
			)}

			<a href="https://www.flaticon.com/free-icons/email" title="email icons">
				Icons created by Freepik - Flaticon
			</a>
		</>
	);
};

export default AppWrap(
	MotionWrap(Footer, 'app__footer'),
	'contact',
	'app__primarybg'
);
