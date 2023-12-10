import React from 'react';
import { Link } from 'react-router-dom';
import exclusiveShop from '../assets/Shopping_1.jpeg';
import './Offers.css';
const Offers = () => {
	return (
		<div className='offers'>
			<div className='offers_left'>
				<h2>Exclusive</h2>
				<h1>Only for you</h1>
				<Link to='#' style={{ textDecoration: 'none' }}>
					<div className='check_now'>
						<div>Check Now</div>
					</div>
				</Link>
			</div>
			<div className='offers_right'>
				<img src={exclusiveShop} alt='Exclusives' />
			</div>
		</div>
	);
};

export default Offers;
