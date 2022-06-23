import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';

import { images } from '../../constants';
import './Header.scss';

const Header = () => {
	return (
		<div className="app__header app__flex">
			<motion.div
				whileInView={{ x: [-100, 0], opacity: [0, 1] }}
				transition={{ duration: 0.5 }}
				className="app__header-info">
				<div className="app__header-badge">
					<div className="badge-cmp app__flex">
						<div style={{ marginLeft: 20 }}>
							<p className="p-text">Ciao, Sono </p>
							<p className="head-text">Beatriz Marin</p>
						</div>
					</div>
					<div className="tag-cmp app__flex">
						<p className="p-text">Seo Specialist</p>
						<p className="p-text">& Data Analist</p>
					</div>
				</div>
			</motion.div>
			<motion.div
				whileInView={{ opacity: [0, 1] }}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				className="app__header-img">
				<img src={images.profile1} alt="profile_bg" />
				<motion.img
					whileInView={{ scale: [0, 1] }}
					transition={{ duration: 1.2, ease: 'easeInOut' }}
					className="overlay_circle"
					src={images.circle}
					alt="profile-circle"
				/>
			</motion.div>
		</div>
	);
};

export default AppWrap(Header, 'home');
