import React from 'react';
import instagramIcon from '../assets/Icons/Instagram.png';
import linkedinIcon from '../assets/Icons/Linkedin.png';
import TwitterIcon from '../assets/Icons/Twitter.png';
import whatsappIcon from '../assets/Icons/Whatsapp.png';
import logo from '../assets/Logo/Main_Logo_1_NoBg.png';
import './Footer.css';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer_logo'>
				<img src={logo} alt='Main Logo' />
			</div>
			<ul className='footer_links'>
				<li>Company</li>
				<li>Products</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
			<div className='footer_icons'>
				<div className='footer_social_icon'>
					<img src={whatsappIcon} alt='Whatsapp' />
				</div>
				<div className='footer_social_icon'>
					<img src={instagramIcon} alt='Instagram' />
				</div>
				<div className='footer_social_icon'>
					<img src={linkedinIcon} alt='Linkedin' />
				</div>
				<div className='footer_social_icon'>
					<img src={TwitterIcon} alt='Twitter' />
				</div>
			</div>
			<div className='footer_copyright'>
                <hr/>
				<p>Copyright @ 2023 - All rights reserved.</p>
			</div>
		</div>
	);
};

export default Footer;
