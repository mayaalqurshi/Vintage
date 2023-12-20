import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo_Asset/Main_Logo_1_NoBg.png';
import './MainLogo.css';

const MainLogo = () => {
	return (
		<div className='main_logo'>
			<Link to='/'>
				<img src={Logo} alt='Logo' />
			</Link>
		</div>
	);
};
export default MainLogo;
