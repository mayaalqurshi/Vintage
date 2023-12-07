import React, { useState } from 'react';

import cart from '../assets/Icons/Shopping_Cart.png';
import logo from '../assets/Logo/Main_Logo_1_NoBg.png';
import './Navbar.css';
const Navbar = () => {
	const [menu, setMenu] = useState('women');
	return (
		<div className='nav_bar'>
			<img className='nav_logo' src={logo} alt='Vintage Logo'></img>
			<ul className='nav_menu'>
				<li
					onClick={() => {
						setMenu('women');
					}}
				>
					Women{menu === 'women' ? <hr /> : <></>}
				</li>
				<li
					onClick={() => {
						setMenu('men');
					}}
				>
					Men{menu === 'men' ? <hr /> : <></>}
				</li>
				<li
					onClick={() => {
						setMenu('kids');
					}}
				>
					Kids{menu === 'kids' ? <hr /> : <></>}
				</li>
			</ul>
			<div className='nav_buttons'>
				<div className='nav_cart_count'>0</div>
				<div className='nav_cart'>
					<img className='nav_cart_icon' src={cart} alt='Shopping Cart Icon'></img>
				</div>
				<button className='nav_login_button'>Log In</button>
				<button className='nav_signup_button'>Sign Up</button>
			</div>
		</div>
	);
};
export default Navbar;
