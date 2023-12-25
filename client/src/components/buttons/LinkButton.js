import React from 'react';
import { Link } from 'react-router-dom';
import './Buttons.css';

const LinkButton = ({ children, url, onClick }) => {
	return (
		<div className='link_button'>
			<Link to={url} className='link_button_text' onClick={onClick}>
				<span>{children}</span>
			</Link>
		</div>
	);
};
export default LinkButton;
