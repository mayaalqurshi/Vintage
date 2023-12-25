import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import cart from '../assets/Icons/Shopping_Cart.png';
import MainButton from '../buttons/MainButton.js';
import MainLogo from '../logo/MainLogo';
import NavBarMenu from './NavBarMenu';
import './Navbar.css';

const Navbar = () => {
	const { getTotalCartItem } = useContext(ShopContext);
	const totalAmount = getTotalCartItem();
	return (
		<div className='nav_bar'>
			<NavBarMenu />
			<MainLogo />
			<div className='nav_buttons'>
				<div className='nav_cart_count'>{totalAmount}</div>
				<Link to='/cart' style={{ textDecoration: 'none' }}>
					<img className='nav_cart_icon' src={cart} alt='Shopping Cart Icon'></img>
				</Link>
				<MainButton url='/login'>Log In</MainButton>
			</div>
		</div>
	);
};
export default Navbar;
