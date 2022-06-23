import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const SocialMedia = () => (
	<div className="app__social">
		<div>
			<FaLinkedinIn />
		</div>
		<div>
			<BsTwitter />
		</div>
		<div>
			<FaFacebookF />
		</div>
		<div>
			<BsInstagram />
		</div>
	</div>
);

export default SocialMedia;
