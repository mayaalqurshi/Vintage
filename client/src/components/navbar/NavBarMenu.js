import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import moreMenuIcon from '../assets/Icons/More_Menu.png';


const NavBarMenu = () => {
	const [menu, setMenu] = useState('women');
	return (
		<div>
			<div className='nav_more_menu'>
				<Link to='#'>
					<img src={moreMenuIcon} alt='More' />
				</Link>
			</div>
			<ul className='nav_menu'>
				<li
					onClick={() => {
						setMenu('women');
					}}
				>
					<Link className='nav_menu_link' to='/women' style={{ textDecoration: 'none' }}>
						Women
					</Link>
					{menu === 'women' ? <hr /> : <></>}
				</li>
				<li
					onClick={() => {
						setMenu('men');
					}}
				>
					<Link className='nav_menu_link' to='/men' style={{ textDecoration: 'none' }}>
						Men
					</Link>
					{menu === 'men' ? <hr /> : <></>}
				</li>
				<li
					onClick={() => {
						setMenu('kids');
					}}
				>
					<Link className='nav_menu_link' to='/kids' style={{ textDecoration: 'none' }}>
						Kids
					</Link>
					{menu === 'kids' ? <hr /> : <></>}
				</li>
			</ul>
		</div>
	);
};

export default NavBarMenu;
