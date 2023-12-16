import React from 'react';
import './ProductDisplay.css';

export const ProductDisplay = (props) => {
	const { product } = props;
	return (
		<div className='product_display'>
			<div className='product_display_left'>
				<img src={product.image} alt='' />
				<img src={product.image} alt='' />
				<img src={product.image} alt='' />
				<img src={product.image} alt='' />
			</div>
			<div className='product_display_main'>
				<img className='product_display_main_img' src={product.image} alt='' />
			</div>

			<div className='product_display_right'>
				<h1>{product.name}</h1>
				<div className='product_display_prices'>
					<div className='product_display_old_price'>${product.old_price}</div>
					<div className='product_display_new_price'>${product.new_price}</div>
				</div>
			</div>
		</div>
	);
};
export default ProductDisplay;
