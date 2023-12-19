import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import removeIcon from '../assets/Icons/Remove.png';
import './CartItems.css';

const CartItems = () => {
	const { getTotalCartAmount,all_product, cartItems, removeFromCart } = useContext(ShopContext);

	return (
		<div className='cart_items'>
			<div className='cart_items_format_main'>
				<div>Product</div>
				<div>Title</div>
				<div>Price</div>
				<div>Quantity</div>
				<div>Total</div>
				<div>Remove</div>
			</div>
			<hr />
			{all_product.map((e) => {
				if (cartItems[e.id] > 0) {
					return (
						<div className='cart_items_format_product cart_items_format_main'>
							<img src={e.image} alt='Product' className='cart_item_product_img' />
							<p>{e.name}</p>
							<p>${e.new_price}</p>
							<button className='cart_item_quantity'>{cartItems[e.id]}</button>
							<p>${e.new_price * cartItems[e.id]}</p>
							<img
								src={removeIcon}
								alt='Remove Product'
								onClick={() => {
									removeFromCart(e.id);
								}}
								className='cart_item_remove_icon'
							/>
						</div>
					);
				}
				return null;
			})}

			<div className='cart_item_brief'>
				<div className='cart_item_totals'>
					<h2>Cart Total</h2>
					<hr />
					<div className='cart_item_total_item'>
						<p>Subtotal</p>
						<p>${getTotalCartAmount()}</p>
					</div>
					<hr />

					<div className='cart_item_total_item'>
						<p>Shipping Fee</p>
						<p>Free</p>
					</div>
					<hr />

					<div className='cart_item_total_item'>
						<p>Total</p>
						<p>${getTotalCartAmount()}</p>
					</div>
					<hr />
					<button>Proceed To Checkout</button>
				</div>
				<div className='cart_item_code'>
					<p>Enter a promo code in here</p>
					<div className='cart_item_code_field'>
						<input type='text' placeholder='Promo code' />
						<button>Submit</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default CartItems;
