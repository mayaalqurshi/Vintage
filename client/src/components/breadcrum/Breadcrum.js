import React from 'react';
import rightArrowIcon from '../assets/Icons/Right_Arrow.png';
import './Breadcrum.css';

const Breadcrum = (props) => {
	const { product } = props;

	return (
		<div>
			<div className='breadcrum'>
				Home <img src={rightArrowIcon} alt='Right Arrow' /> Shop <img src={rightArrowIcon} alt='Right Arrow' />{' '}
				{product.category} <img src={rightArrowIcon} alt='Right Arrow' /> {product.name}
			</div>
		</div>
	);
};

export default Breadcrum;
