import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import moreMenuIcon from '../assets/Icons/More_Menu.png';
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
				<div className='nav_auth_buttons'>
					{/* <MainButton url='/signup' buttonColor={'button-transparent'}>
						Sign Up
					</MainButton> */}
					<MainButton url='/login'>Log In</MainButton>
				</div>
				<div className='nav_more_menu'>
					<Link to='#'>
						<img src={moreMenuIcon} alt='More' />
					</Link>
				</div>
			</div>
		</div>
	);
};
export default Navbar;
