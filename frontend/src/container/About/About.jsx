import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';

import './About.scss';
import { urlFor, client } from '../../client';

/* const abouts = [
	{
		title: 'Analísis Seo',
		description: 'I check if you have done SEO ',
		imgUrl: images.about01,
	},
	{ title: 'Projecto Seo', description: 'I do SEO', imgUrl: images.about02 },
	{
		title: 'Seo Consult',
		description: 'I tell you how to SEO',
		imgUrl: images.about03,
	},
]; */

const About = () => {
	const [abouts, setAbouts] = useState([]);

	useEffect(() => {
		const query = '*[_type == "abouts"]';
		client.fetch(query).then((data) => setAbouts(data));
	}, []);

	return (
		<>
			<h2 className="head-text">
				So che un <span>buon SEO</span>
				<br /> significa <span>buoni affari</span>
			</h2>

			<div className="app__profiles">
				{abouts.map((about, index) => (
					<motion.div
						whileInView={{ opacity: 1 }}
						whileHover={{ scale: 1.1 }}
						transition={{ duration: 0.5, type: 'tween' }}
						className="app__profile-item">
						<img src={urlFor(about.imgUrl)} alt={about.item} />
						<h2 className="bold-text" style={{ marginTop: 20 }}>
							{about.title}
						</h2>
						<p className="p-text" style={{ marginTop: 10 }}>
							{about.description}
						</p>
					</motion.div>
				))}
			</div>
		</>
	);
};

export default About;
