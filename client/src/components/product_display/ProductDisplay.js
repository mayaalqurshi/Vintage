import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import './ProductDisplay.css';

export const ProductDisplay = (props) => {
	const { product } = props;
	const { addToCart } = useContext(ShopContext);
	return (
		<div className='product_display'>
			<div className='product_display_left'>
				<img src={product.image} alt='' />
				<img src={product.image} alt='' />
				<img src={product.image} alt='' />
				<img src={product.image} alt='' />
			</div>
			<div className='product_display_main'>
				<img src={product.image} alt='' />
			</div>
			<div className='product_display_right'>
				<h1>{product.name}</h1>
				<div className='product_display_prices'>
					<div className='product_display_old_price'>${product.old_price}</div>
					<div className='product_display_new_price'>${product.new_price}</div>
				</div>
				<div className='product_display_description'>
					A lightweight, close-fitting and with a round neckline and short sleeves, warn as an undershirt or
					outer garment.
				</div>
				<div className='product_display_size'>
					<h2>Select Size</h2>
					<div className='product_display_select_size'>
						<div>S</div>
						<div>M</div>
						<div>L</div>
						<div>XL</div>
					</div>
				</div>
				<button
					onClick={() => {
						addToCart(product.id);
					}}
				>
					Add to Cart
				</button>
			</div>
		</div>
	);
};
export default ProductDisplay;
