import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import cart from '../assets/Icons/Shopping_Cart.png';
import logo from '../assets/Logo/Main_Logo_1_NoBg.png';
import './Navbar.css';
const Navbar = () => {
	const [menu, setMenu] = useState('shop');
	return (
		<div className='nav_bar'>
			<img className='nav_logo' src={logo} alt='Vintage Logo'></img>
			<ul className='nav_menu'>
				<li
					onClick={() => {
						setMenu('shop');
					}}
				>
					<Link to='/' style={{ textDecoration: 'none' }}>
						Shop
					</Link>
					{menu === 'shop' ? <hr /> : <></>}
				</li>
				<li
					onClick={() => {
						setMenu('women');
					}}
				>
					<Link to='/women' style={{ textDecoration: 'none' }}>
						Women
					</Link>
					{menu === 'women' ? <hr /> : <></>}
				</li>
				<li
					onClick={() => {
						setMenu('men');
					}}
				>
					<Link to='/men' style={{ textDecoration: 'none' }}>
						Men
					</Link>
					{menu === 'men' ? <hr /> : <></>}
				</li>
				<li
					onClick={() => {
						setMenu('kids');
					}}
				>
					<Link to='/kids' style={{ textDecoration: 'none' }}>
						Kids
					</Link>
					{menu === 'kids' ? <hr /> : <></>}
				</li>
			</ul>
			<div className='nav_buttons'>
				<div className='nav_cart_count'>0</div>
				<Link to='/cart' style={{ textDecoration: 'none' }}>
					<img className='nav_cart_icon' src={cart} alt='Shopping Cart Icon'></img>
				</Link>
				<Link to='/login' style={{ textDecoration: 'none' }}>
					<button className='nav_login_button'>Log In</button>
				</Link>
				<Link to='/signup' style={{ textDecoration: 'none' }}>
					<button className='nav_signup_button'>Sign Up</button>
				</Link>
			</div>
		</div>
	);
};
export default Navbar;
