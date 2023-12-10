import React from 'react';
import { Link } from 'react-router-dom';
import newIcon from '../assets/Icons/New.png';
import arrowRight from '../assets/Icons/Right_Arrow.png';
import heroVogue from '../assets/Vogue_2.png';
import './Hero.css';

const Hero = () => {
	return (
		<div className='hero'>
			<div className='hero_left'>
				<div className='hero_new_icon'>
					<img src={newIcon} alt='New' />
				</div>
				<h2>New Arrivals</h2>
				<Link to='#' style={{ textDecoration: 'none' }}>
					<div className='hero_latest'>
						<div>Latest Collection</div>
						<img src={arrowRight} alt='Latest Collection' />
					</div>
				</Link>
			</div>
			<div className='hero_right'>
				<img src={heroVogue} alt='HeroVogue' />
			</div>
		</div>
	);
};
export default Hero;
